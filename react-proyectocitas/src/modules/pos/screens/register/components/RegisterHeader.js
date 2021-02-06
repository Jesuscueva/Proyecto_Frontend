import React from 'react'
import { Link } from 'react-router-dom'
import logoempresa from "../../../.././../assets/img/logo2.png"


const RegisterHeader = () => {
    return (
        <header className="header" >
            <div className="header__logo">
                <img src={logoempresa} alt=""/>
            </div>
            <Link to="/pos/home" className="link"><p className="header_home"><i class="fas fa-home"></i>Volver Home</p></Link>
        </header>
    )
}

export default RegisterHeader