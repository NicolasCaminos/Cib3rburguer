import { Link } from "react-router-dom"
import { Navbar } from "./Navbar.jsx"

export const Header = () => {
    return (
        <header className="header_container">
            <Navbar />

            <Link to={"/"}><img src="/logoMQM.png" alt="Mas-Que-Muebles-logo" className="header_logo" /></Link>

            <span className="header_span"></span>
        </header>
    )
}