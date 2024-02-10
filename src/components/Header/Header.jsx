import { NavbarMobile } from "./Navbar.jsx"

export const Header = () => {
    return (
        <div className="header_container">
            <NavbarMobile />

            <img src="/logoMQM.png" alt="Mas-Que-Muebles-logo" className="header_logo" />

            <span style={{width: "32px"}}></span>
        </div>
    )
}