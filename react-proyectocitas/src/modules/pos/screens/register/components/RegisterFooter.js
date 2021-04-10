import React from 'react'


const RegisterFooter = () => {
    return (
        <footer className="footer__wrapper">
        <div className="footer__row">
            <div className="footer__top">
                <h4 className="footer__title">
                    Logo
                </h4>
                <div className="footer__links">
                    <ul className="footer__ul">
                        <li className="footer__li">Home</li>
                        <li className="footer__li">Servicios</li>
                        <li className="footer__li">Nosotros</li>
                        <li className="footer__li">Contactanos</li>
                    </ul>
                </div>
                <div className="footer__redes">
                    <img src="./img/facebook-icon.webp" width="35" height="35" alt="" />
                    <img src="./img/instagram-icon.png" width="35" height="35" alt="" />
                    <img src="./img/youtube-icon.png" width="35" height="35" alt="" />
                </div>
            </div>
            <div className="footer__bottom">
                <p>2021 Logo. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    )
}

export default RegisterFooter