import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";

export function Navbar() {
    const { isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <Link to="/">Inicio</Link> 

            
            <>
                 <Link to="/profile">Perfil usuario</Link>
            
            </>

            
            <div className="navbar-session">
                {!isAuthenticated ? (
                    <Link to="/login">Login</Link>
                ) : (
                    <>
                    <span>Hola, {user?.firstName ?? 'usuaria'}</span>
                    <button>Cerrar Sesión</button>                   
                    </>
                )}
            </div>
        </nav>
    )
}