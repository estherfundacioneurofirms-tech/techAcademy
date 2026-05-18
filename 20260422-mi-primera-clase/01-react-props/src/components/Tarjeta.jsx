import Avatar from "./Avatar"

function Tarjeta({src, nombre, edad}) {
    return (
        <div className="tarjeta">
            <Avatar src={src} nombre={nombre}/>
            <p>Mi nombre es: {nombre}</p>
            <p>Mi edad es: {edad} </p>
            <p>{edad > 40 ? "Estas en una nueva juventud" : "" }</p>
        </div>
    )
}

export default Tarjeta

