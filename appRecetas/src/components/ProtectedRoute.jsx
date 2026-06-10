import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export function ProtectedRoute({ children }) {

    const { isAuthenticated, loading } = useAuth();

    //Mientras comprobamos si hay un usuario autentificado mostramos un mensaje de carga
    //Esto evita redirecciones falsas cuando la pagina esta cargandose mientras se comprueba

    if (loading) {
        return <p className="feedback">Cargando sesión...</p>
    }

    //si no tenemos un token valido no podemos acceder a las páginas donde se encuentre este recurso
    //Navigate le mandara automaticamente a la pagina de login

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    // Si esta identificado ok

    return children;

}