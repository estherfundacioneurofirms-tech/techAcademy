import { useState, useCallback, useEffect } from "react";
import { loginUser, getCurrentUser } from "../api/authApi";
import { AuthContext } from "./authContext";

const TOKEN_STORAGE_KEY = 'token';
const TOKEN_EXPIRATION_STORAGE_KEY = 'tokenExpiration';
const SESSION_DURATION_MS = 5 * 60 * 1000;

function getStoredToken() {
    const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    const storedExpiration = localStorage.getItem(TOKEN_EXPIRATION_STORAGE_KEY);

    // si no hay token o no hay fecha de expiración no hay sesión valida
    if (!storedExpiration || !storedToken) {
        return null;
    }

    //convertir en numero para poder pasarsela a Date.now
    const expirationDate = Number(storedExpiration);

    // si la fecha actual (si ahora mismo) es mayor que la fecha guardada quiere decir
    // que la sesión expiro
    if (Date.now() > expirationDate) {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem(TOKEN_EXPIRATION_STORAGE_KEY);
        return null;
    }

    return storedToken;
}

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getStoredToken);

    //Aqui declaramos constante que usaremos para saber si esta autenticado o no pasando el token si este no es
    //null estará autenticado
    const [loading, setLoading] = useState(true);

    const isAuthenticated = Boolean(token);

    async function login(username, password) {
        const data = await loginUser(username, password)

        //Calcular cuando debe caducar el token de la sesion (ahora + 5 min)
        const expirationDate = Date.now() + SESSION_DURATION_MS;

        localStorage.setItem(TOKEN_STORAGE_KEY, data.accessToken);
        localStorage.setItem(TOKEN_EXPIRATION_STORAGE_KEY, String(expirationDate));

        setToken(data.accessToken)
        setUser({
            id: data.id,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            image: data.image,
        })        
    }

    const logout = useCallback(function logout() {
        //cuando cerramos la sesion limpiamos cualquier rastro de la sesión
        localStorage.removeItem(TOKEN_EXPIRATION_STORAGE_KEY);
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        setToken(null);
        setUser(null);

    },[])

    useEffect(() => {
        async function loadUser() {
            //comprobacion: Si no hay token no deja cargar el usuario
            if (!token) {
                setLoading(false);
                return;
            }

            //si todo ok continua

            try {
                //Si hay token le preguntamos a la API de dummy quien es la persona identificada
                const currentUser = await getCurrentUser(token);
                setUser(currentUser);

            } catch {
                //si no hay token o no sirve limpiamos la sesión
                logout()

            } finally {
                setLoading(false);
            }
            
        }
        loadUser();

    }, [token, logout])


    //Este efecto sera el reloj que contará los 5 min para cerrar la sesión
    useEffect(() => {
        if(!token) {
            return;
        }

        const storedExpiration = localStorage.getItem(TOKEN_EXPIRATION_STORAGE_KEY);

        //si no hay fecha de expiracion vamos a llamar al logout para evitar llamar a un setState 
        if(!storedExpiration) {
            const missingExpirationTimer = setTimeout(() => {
                logout()
            },0)
            return () => clearTimeout(missingExpirationTimer)
        }

        //calculamos el tiempo restante
        const timeUntilExpiration = Number(storedExpiration) - Date.now();

        //si el tiempo es 0 o negativo es que ya caduco llamamos logout en setTimeout como arriba
        if(timeUntilExpiration <= 0) {
            const expiredSessionTimer = setTimeout(() => {
                logout();
            }, 0)
            return () => clearTimeout(expiredSessionTimer);
        }

        //si si que queda tiempo para expirar programamos el reloj para que automaticamente
        // cierre sesión en ese tiempo haga logout borre token y ProtectedRoute expulsa al usuario 
        // de rutas protegidas
        const expirationTimer = setTimeout(() => {
            logout();

        }, timeUntilExpiration)
        return () => clearTimeout(expirationTimer);

    }, [token, logout])

    return (
        <AuthContext.Provider value={{ user, token, loading, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
