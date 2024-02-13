import "./scss/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home.jsx"
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
