import { useContext } from "react" 


function Header() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <header className={darkmode ? "dark" : ""}>
            <h1>Mi App Claro Oscuro</h1>
        </header>
    )

}

export default Header