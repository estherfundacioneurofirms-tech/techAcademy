import { useState } from "react";
import { loginUser } from "../api/authApi";
import { AuthContext } from "./authContext";

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    //Aqui declaramos constante que usaremos para saber si esta autenticado o no pasando el token si este no es
    //null estará autenticado
    const [loading, setLoading] = useState(true);

    const isAuthenticated = Boolean(token);

    async function login(username, password) {
        const data = await loginUser(username, password)
 

        setToken(data.accessToken)
        setUser({
            id: data.id,
            username: data.username,
            firstName:data.firstName,
            lastName: data.lastName,
            email: data.email,
            image: data.image,
        })        
    }

    return (
        <AuthContext.Provider value={{user, token, loading, isAuthenticated, login}}>
            {children}
        </AuthContext.Provider>
    )

}
