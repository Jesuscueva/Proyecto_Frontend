import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../../../../styles/style.css'


const PosHeader = () => {

  const [activo, setActivo] = useState(true)

  const toggler = ()=>{
    activo ? setActivo(false) : setActivo(true)
  }

    return (
        <header className={activo ? "cabecera" : "cabecera open_bar"} id="cabecera">
        <div className="logo ">
          <img src="#" alt="LOGO DE LA EMPRESA" />
        </div>
        <div className="cabecera_2 ">
          <nav >
            <ul className="navegador">
              <li className="cabecera_lista "><a href="#" className="cabecera_link">Home</a></li>
              <li className="cabecera_lista "><a href="#" className="cabecera_link">Servicios</a></li>
              <li className="cabecera_lista "><a href="#" className="cabecera_link">Contáctanos</a></li>
            </ul>
          </nav>
          <div className="cabecera_btn">
            <button className="btn1 open_bar"><Link to="/pos/login">Ingresar</Link></button>
            <button className="btn2">Registrate</button>
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
