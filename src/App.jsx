import "./scss/App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home.jsx"
import { Header } from "./components/Header/Header.jsx"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
