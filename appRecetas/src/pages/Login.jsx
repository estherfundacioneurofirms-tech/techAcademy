import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from 'react-router-dom';

export function Login() {

    //los campos que recogeremos del formulario los inicializamos en vacio para asegurarnos de que existen
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //error guarda mensajes visibles si algo saale mal
    const [error, setError] = useState('');

    //loading sirve para desactivar el boton mientras esperamos respuesta de la api
    const [loading , setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {

        //para que la pagina no se recargue 
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            //vamos a pedirle al login que hemos traido del contexto que haga login
            //si va bien guardara el token usuario y cuando caduca

            //Despues del login le mandamos a la pagina de profile
            navigate('/profile');

        } catch (error) {
            //Si la api nos devuelve un error mostramos el mensaje con el error
            setError(error.message);
        } finally {
            setLoading(false);
        }
        
    }


    return(
        <main className="page narrow-page">
            <section className="card">
                <h1>Iniciar Sesión</h1>
                <p>
                    usá credenciales de prueba para entrar en las zonas privadas.
                    La sesión caduca automaticamente a los 5 min
                </p>

                <form className="form" onSubmit={handleSubmit}>
                    <label>
                        Usuario 
                        <input 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    </label>

                    <label>
                        Contraseña 
                        <input 
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </label>

                    <button disabled={loading}>{loading ? "Autenticando... " : "Login"}</button>

                </form>
                {error && <p className="error">{error}</p>}

                <div className="hint">
                    <p>
                        <strong>Usuario:</strong> emilys
                    </p>

                    <p>
                        <strong>Contraseña</strong> emilyspass
                    </p>
                </div>
            </section>
        </main>
    )
}