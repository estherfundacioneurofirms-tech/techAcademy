const API_URL = 'https://dummyjson.com/auth'

export async function loginUser(username, password) {
    //Esta función sirve para realizar la petición al backend de inicio de sesion
    //React NO comprueba la contraseña --  React solo envia los datos
    // quien valida los datos es el backend y nos devuelve si son correctos o no


    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        //le pedimos a DummyJSON que el token expire cada 5 min
        expiresInMins:5,
      }),      
    })

    // si la API nos responde un error 

    if(!response.ok) {
        throw new Error('Usuario o contraseña incorrecto');
    }

    //si nos devuelve que es todo ok nos devolveria un accessToken 
    return response.json();
}

export async function getCurrentUser(token) {
    //esta funcion sirve para preguntar a la API "con este token que usuario soy?" 
    //El token se envia en los headers o cabecera de la Authorización 

    const response = await fetch(`${API_URL}/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if(!response.ok) {
        throw new Error ('No se ha podido obtener el usuario');
    }

    //si todo ok
    return response.json();
    
}