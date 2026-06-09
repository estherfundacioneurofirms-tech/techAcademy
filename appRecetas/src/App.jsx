import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />

      <Route path="/profile" element={<Profile/>} />
      
    
    </Routes>    
    </BrowserRouter>
  )
}

export default App
