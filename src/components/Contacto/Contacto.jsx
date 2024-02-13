import { MapGoogle } from "./Map.jsx";

export const Contacto = () => {

    return (
        <div className="contacto_container">

            <div className="contacto_aside">
                <h2 className="contacto_title">Contacto</h2>
                
                <div className="contacto_contentContainer">
                    <img src="/mapMarker.svg" alt="googleMapMarker-MQM" />
                    <p className="contacto_contentText">Av Alvear Este 555, General Alvear, Mendoza</p>
                </div>
                <div className="contacto_contentContainer">
                    <img src="/emailIcon.svg" alt="emailIcon-MQM" />
                    <p className="contacto_contentText">masquemuebles@live.com.ar</p>
                </div>
                <div className="contacto_contentContainer">
                    <img src="/whatsappIcon.svg" alt="whatsappIcon-MQM" />
                    <p className="contacto_contentText">+54 9 2625 64-3150</p>
                </div>
                <div className="contacto_contentContainer">
                    <img src="/facebookIconContacto.svg" alt="facebookIcon-MQM" />
                    <a href="https://www.facebook.com/masquemuebles.alvear" className="contacto_contentLink">Seguinos en Facebook</a>
                </div>
                <div className="contacto_contentContainer">
                    <img src="/instagramIconContacto.svg" alt="instagramIcon-MQM" />
                    <a href="https://www.instagram.com/masquemueblesalvear/" className="contacto_contentLink">Seguinos en Instagram</a>
                </div>
            </div>

            <MapGoogle />
        </div>
    )
}