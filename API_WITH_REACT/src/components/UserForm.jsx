function UserForm({apiUrl, addUserCallback}) {

    function handleSubmit(ev) {
        ev.preventDefault()
        console.log('[handleSubmit]')

        const newUser = {
            name: ev.target.name.value,
            email: ev.target.email.value,
            avatar: ev.target.avatar.value
        }

        const requestData = {
            method: 'POST', // Crear un nuevo registro
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        fetch(apiUrl, requestData)
            .then(response => {
                if (response.ok) {
                    return response.json()

                } else {
                    throw new Error(`Status code ${response.status}`)
                }
            })
            .then(data => {
                addUserCallback(data)
            })
            .catch(err => {
                console.error(`[ERROR] ${err}`)
            })

       }

    return (
        <div className="user-form">
            <form
                onSubmit={handleSubmit}
            >
                <label>Username:
                    <input type="text" name="name"
                        placeholder="Nombre de usuario"
                        autoComplete="off"
                    />
                </label>

                <label>email:
                    <input type="text" name="email"
                        placeholder="Correo electrónico"
                        autoComplete="off"
                    />
                </label>

                <label>avatar:
                    <input type="text" name="avatar"
                        placeholder="URL del avatar"
                        autoComplete="off"
                    />
                </label>

                <button type="submit">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default UserForm