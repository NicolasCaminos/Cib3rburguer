import "./scss/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home.jsx"
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { Contacto } from "./components/Contacto/Contacto.jsx"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
