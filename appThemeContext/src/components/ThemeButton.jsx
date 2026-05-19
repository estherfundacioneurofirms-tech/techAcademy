import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx"

function ThemeButton() {
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <button className={darkMode ? "dark" : ""}
            onClick={() => setDarkMode(!darkMode)}>
                Modo {darkMode ? "claro" : "oscuro"}
            </button>
    )

}

export default ThemeButton