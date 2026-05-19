import { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ThemeButton from './components/ThemeButton'
import './index.css'

function App() {

  const [darkMode , setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "app dark" : "app"}>
        <Header />
        <MainContent />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
   
  )
}

export default App
