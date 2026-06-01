import { useState } from 'react'
import './index.css'
import Counter from './components/Counter'

let jsonString2 = '{"title": "Avatar", "image": "lalala", "description":"De las mejores peliculas del universo", "score": 100}'

function App() {

  return (
    <div>
        <h1>Mi primer contador paso a paso</h1>
        <Counter />

    </div>
  
  )
}

export default App
