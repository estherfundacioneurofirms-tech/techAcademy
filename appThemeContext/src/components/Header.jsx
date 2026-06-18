import { useContext } from "react" 
import { ThemeContext } from "../context/ThemeContext"


function Header() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <header className={darkMode ? "dark" : ""}>
            <h1>Mi App Claro Oscuro</h1>
        </header>
    )

}

export default Header