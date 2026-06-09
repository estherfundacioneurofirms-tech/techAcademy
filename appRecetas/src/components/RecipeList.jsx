export function RecipeList({ recipes }) {
    return(
        <section className="grid">
            {recipes.map((recipe) => (
                <article className="card recipe" key={recipe.id}>
                    <img src={recipe.image} alt={recipe.name} />
                    <h2>{recipe.name}</h2>
                    <p>Cocina: {recipe.cuisine}</p>
                    <p>Dificultad: {recipe.difficulty}</p>
                    <p>Tiempo: {recipe.time}</p>
                    <p>{recipe.description}</p>
                </article>
            ))}
        </section>
    )
}
