export const Footer = () => {
    return (
        <footer className="footer_container">
            <div className="footer_socialIconContainer">
                <a href="https://www.instagram.com/masquemueblesalvear/" target="_blank"><img src="/instagramIcon.svg" alt="instagram-MasQueMuebles" className="footer_socialIcons" /></a>
                <a href="https://www.facebook.com/masquemuebles.alvear" target="_blank"><img src="/facebookIcon.svg" alt="facebook-MasQueMuebles" className="footer_socialIcons" /></a>
            </div>
            <p className="footer_text">Seguinos en nuestras redes sociales para estar al tanto de nuevos productos</p>
            <p className="footer_copyright">Copyright © Más que Muebles 2024.</p>
        </footer>
    )
}