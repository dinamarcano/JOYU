import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  const miFuente = new FontFace('title', 'url(/assets/Circular.ttf) format("truetype")')
  miFuente
    .load()
    .then(function (loadedFont) {
      document.fonts.add(loadedFont)
    })
    .catch(function (error) {
      console.error('Error al cargar la fuente:', error)
    })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
