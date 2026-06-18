import { useAuth } from "../context/useAuth";
import { useNavigate, Link } from "react-router-dom";

export function Navbar() {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();
    function handleLogout() {
        logout();
        navigate('/login');
    }

    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link> 
            
            { isAuthenticated && (
                <>
                 <Link to="/profile">Perfil usuario</Link>
            
                </>
            )}
           
            <div className="navbar-session">
                {!isAuthenticated ? (
                    <Link to="/login">Login</Link>
                ) : (
                    <>
                        <span>Hola, {user?.firstName ?? 'usuaria'}</span>
                        <button onClick={handleLogout}>Cerrar Sesión</button>                   
                    </>
                )}
            </div>
        </nav>
    )
}