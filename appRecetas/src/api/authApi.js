const API_URL = 'https://dummyjson.com/auth'

export async function loginUser(username, password) {
  // Esta función representa la llamada al backend para iniciar sesión.
  // React NO comprueba la contraseña: React solo envía los datos.
  // Quien valida si el usuario y la contraseña son correctos es la API.
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,

      // Le pedimos a DummyJSON que el token dure 5 minutos.
      // Esto nos viene genial para clase porque se puede ver cómo caduca la sesión.
      expiresInMins: 5,
    }),
  })

  // Si la API responde con error, normalmente será porque las credenciales no son correctas.
  if (!response.ok) {
    throw new Error('Usuario o contraseña incorrectos')
  }

  // Si todo va bien, la API nos devuelve los datos del usuario y un accessToken.
  return response.json()
}

export async function getCurrentUser(token) {
  // Esta función pregunta a la API: "con este token, ¿quién soy?".
  // El token se envía en la cabecera Authorization.
  const response = await fetch(`${API_URL}/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('No se pudo obtener el usuario')
  }

  // Si el token es válido, la API devuelve los datos del usuario autenticado.
  return response.json()
} 