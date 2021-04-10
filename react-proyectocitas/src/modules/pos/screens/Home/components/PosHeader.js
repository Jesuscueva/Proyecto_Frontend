import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../../../../styles/style.css'
import logoempresa from "../../../.././../assets/img/logoempresa.png"


const PosHeader = () => {

  const [activo, setActivo] = useState(true)

  const toggler = ()=>{
    activo ? setActivo(false) : setActivo(true)
  }

    return (
        <header className={activo ? "cabecera" : "cabecera open_bar"} id="cabecera">
        <div className="logo ">
          <img src={logoempresa} alt="LOGO DE LA EMPRESA" />
        </div>
        <div className="cabecera_2 "  id="home">
          <nav >
            <ul className="navegador_1">
              <li className="cabecera_lista "><a href="#" className="cabecera_link">Home</a></li>
              <li className="cabecera_lista "><a href="#servicio" className="cabecera_link">Servicios</a></li>
              <li className="cabecera_lista "><a href="#nosotros" className="cabecera_link">Nosotros</a></li>
              <li className="cabecera_lista "><a href="#contactanos" className="cabecera_link">Contáctanos</a></li>
            </ul>
          </nav>
          <div className="cabecera_btn">
            <button className="btn1 open_bar"><Link className="link1" to="/pos/login">Ingresar</Link></button>
            <button className="btn2"><Link className="link2" to="/pos/register">Registrate</Link></button>
          </div>
        </div>
        <div className="bar" id="menu">
          <button className="btn_bar" onClick={toggler}>
          <i className="fas fa-bars bar"></i>
          </button>
        </div>
      </header>
    )
}

export default PosHeader
