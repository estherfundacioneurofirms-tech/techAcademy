import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../api/recipesApi";
import { RecipeList } from '../components/RecipeList.jsx';

export function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadRecipes() {
            try{
                const data = await getRecipes();
                setRecipes(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }            
        }

        loadRecipes();
    },[])

    return(
        <main className="page">
            <section className="card hero-card">
                <p className="eyebrow">Bootcamp Frontend</p>
                <h1> Recetario de prueba login</h1>

                <p> 
                    ver las recetas es público, para crear editar y borrar hay que entrar 
                    en la zona de administración
                </p>

            </section>

            <section className="card">
                <h2>Recetas disponibles</h2>
                <p>Estos datos los saca de mockAPI</p>
            </section>

            {loading && <p className="feedback">Cargando recetas...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error &&(
                <>
                {console.log("Renderizando RecipeList", recipes)}
                 <RecipeList recipes={recipes}/>
                </>
            )}
        </main>
    )
}