import React from 'react'
import { Link } from 'react-router-dom'


const LoginHeader = () => {
    return (
        <header className="header" >
            <figure className="header__menu">
                <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
            </figure>
            <div className="header__logo">
                Logo
            </div>
            <Link to="/pos/home" className="link"><p className="header_home"><i class="fas fa-home"></i>Volver Home</p></Link>
        </header>
    )
}

export default LoginHeader