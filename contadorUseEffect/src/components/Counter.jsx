import { useState } from "react";
import { useEffect } from "react";

function Counter() {
    const [ count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

useEffect(() => {
    if(!isRunning) return; // si esta en true continuo si esta en false me salgo no hago nada

    const intervalID = setInterval(() => { //activamos el contador con setInterval
        setCount((prev) => prev +1) //suma 1 cada segundo
    }, 1000)

    return () => {
        clearInterval(intervalID) // esto hace es para y limpiar los datos de este id de intervalo
    }
}, [isRunning])


    return(
        <div>
            <h2>Contador </h2>
            <p> El valor actual es de : {count}</p>

            <button onClick={() => setCount(0)}> Reiniciar contador</button> 

            <button onClick={() => setCount((prev) => prev +1)}>
                Sumar 1 manual
            </button>

            <button onClick={() => setIsRunning(true) }>
                Empieza cuenta automatica
            </button>

            <button onClick={() => setIsRunning(false)}>
                Detener
            </button>
            
        </div>
    )
}

export default Counter;