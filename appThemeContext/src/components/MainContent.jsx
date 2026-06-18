import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

function MainContent() {

    const { darkMode } = useContext(ThemeContext);

    return (
        <main className={darkMode ? "dark" : ""} >
            <h2> Este es el contenido principal</h2>
            <p>Esta app cambia entre el modo claro y oscuro</p>        
        </main>
    )
}

export default MainContent