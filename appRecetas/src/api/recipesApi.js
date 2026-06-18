const RECIPES_API_URL = 'https://6a26a727a84f9d39e9079f7a.mockapi.io/api/recipes';

export async function getRecipes() {
    const response = await fetch(RECIPES_API_URL)
    if (!response.ok) {
        throw new Error('No se han podido cargar las recetas');
    }
    return response.json();
}