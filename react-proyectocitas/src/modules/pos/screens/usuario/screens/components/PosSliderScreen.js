import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PosContext from "../../../../../../context/pos/posContext";

const PosSliderScreen = () => {

  const {usu_nom, } = useContext(PosContext)
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
            Bienvenido <br/> <strong>{usu_nom}</strong>
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
          <Link to="/pos/home" >
          <button className="sidebar_btn">
            <i class="fas fa-sign-out-alt"></i>Salir
          </button>
          </Link>
        </div>
        <div className="sidebar_bar" onClick={toggler}>
        <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default PosSliderScreen;
