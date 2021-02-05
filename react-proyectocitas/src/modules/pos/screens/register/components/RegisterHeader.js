import React from 'react'
import { Link } from 'react-router-dom'


const RegisterHeader = () => {
    return (
        <header className="header" >
            <div className="header__logo">
                Logo
            </div>
            <Link to="/pos/home" className="link"><p className="header_home"><i class="fas fa-home"></i>Volver Home</p></Link>
        </header>
    )
}

export default RegisterHeader