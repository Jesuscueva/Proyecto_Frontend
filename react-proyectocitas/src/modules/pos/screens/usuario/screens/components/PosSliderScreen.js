import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../../../context/auth/authContext";
import PosContext from "../../../../../../context/pos/posContext";

const PosSliderScreen = () => {

  const {nombre, apellido, cerrarSesion } = useContext(AuthContext)
  const [activo, setActivo] = useState(true)

  const toggler = ()=>{
    activo ? setActivo(false) : setActivo(true)
  }
  
  return (
      <div>
      <div className={activo ? "sidebar" : "sidebar activado"}>
        <figure className="logo_empresa">
          <img src="#" alt="LOGO"/>
        </figure>
        <div className="sidebar_nom">
          <h2>
            Bienvenido <br/> <strong>{nombre +" " + apellido}</strong>
          </h2>
        </div>
        <hr />
        <ul className="sidebar_navegacion">
          <li className="sidebar_lista1">
            <Link className="lista_link1" >
            <i className="fas fa-table"></i>Tablero
            </Link>
          </li>
          <li className="sidebar_lista">
            <Link className="lista_link" to="/pos/usuario/cita">
              <i className="fas fa-table"></i>Registar Cita
            </Link>
          </li>
        </ul>
        <div className="btn_slider">
          <button className="sidebar_btn" onClick={cerrarSesion}>
            <i class="fas fa-sign-out-alt"></i>Salir
          </button>
        </div>
        <div className="sidebar_bar" onClick={toggler}>
        <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default PosSliderScreen;
