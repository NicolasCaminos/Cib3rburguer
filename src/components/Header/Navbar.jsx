import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const [showNavMobile, setShowNvabMobile] = useState(false)
    const [showCategoriesMobile, setShowCategoriesMobile] = useState(false)

    const handleMenuNavOpen = () => {
        setShowNvabMobile(true);
    }

    const handleMenuNavClose = () => {
        setShowNvabMobile(false);
    }

    const handleCategories = (e) => {
        setShowCategoriesMobile(!showCategoriesMobile)
        e.stopPropagation()
    }

    const CategoryLink = ({ text, to }) => {
        return (
            <li className="navbar_categoriesLink">
                <Link className="navbar_link" to={to}>
                    {text}
                </Link>
            </li>
        );
    };

    return (
        <div>
            <img className="navbar_burgerIcon" onClick={handleMenuNavOpen} src="/burgerIcon=Open.svg" />
            <div className={showNavMobile ? "navbar_backdrop--active" : ""} onClick={handleMenuNavClose}></div>
            <div className={`navbar_modal ${showNavMobile ? "navbar_modal--active" : ""}`} onClick={(e) => e.stopPropagation()}>

                <div>
                    <img className="navbar_burgerIcon" onClick={handleMenuNavClose} src="/burgerIcon=Close.svg" />
                    <nav className="navbar_container">
                        <Link className="navbar_link navbar_link--inicio">Inicio</Link>
                        <div onClick={handleCategories}>
                            <div className="navbar_link">
                                Categorías<img className={`${showCategoriesMobile ? "navbar_dropdown--rotateUp" : "navbar_dropdown--rotateDown"}`} src="/dropdown.svg" alt="dropdown" />
                            </div>
                            <ul className={`navbar_categories ${showCategoriesMobile ? "navbar_categories--open" : ""}`}>
                                <CategoryLink text="Muebles" />
                                <CategoryLink text="Cortinas" />
                                <CategoryLink text="Estufas" />
                                <CategoryLink text="Campanas de cocina" />
                                <CategoryLink text="Jardín" />
                                <CategoryLink text="Varios" />
                            </ul>
                        </div>
                        <Link className="navbar_link">Testimonios</Link>
                        <Link className="navbar_link">Contacto</Link>
                    </nav>
                </div>

            </div>
        </div>
    )
}