
import './index.css'
import Tarjeta from './components/Tarjeta'

function App() {
 

  return (
    <>
      <h1>Hola, soy "Rozilene"</h1>  

      <Tarjeta src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsK7ox6ZUo_5spLsRJTAh2idvizo7QLqoJ-w&s" nombre="Esther" edad="37" />
      <Tarjeta src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVO4LSlzzN3vjB0C4LiWsqRG-iYFpJEvDHQ&s" nombre="Rossana" edad="46" />
      <Tarjeta src="https://e7.pngegg.com/pngimages/101/287/png-clipart-computer-icons-nanny-template-job-desktop-avatar-woman-template-child.png" nombre="Amanda" edad="43" />

                  
    </>
  )
}

export default App
