import { useAuth } from "../context/useAuth";

export function Profile() {
    const { user } = useAuth()

    return (
        <main className="page narrow-page">
            <section className="card">
                <p className="eyebrow">Ruta protegida</p>
                <h1>Perfil Privado</h1>
                <p>Esta página solo se puede ver si el usuario inicio sesión</p>

                {user && (
                    <article className="profile">
                        <img src={user.image} alt={user.firstName} />
                        <div>
                            <h2>
                                {user.firstName} {user.lastName}
                            </h2>
                            <p>{user.email}</p>
                            <p>Usuario: {user.username}</p>
                        </div>
                    </article>
                )}
            </section>
        </main>
    )
}