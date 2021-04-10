import React, { useEffect, useState } from "react";
import face from "../../../../../assets/img/facebook-icon.webp";
import insta from "../../../../../assets/img/instagram-icon.png";
import youtube from "../../../../../assets/img/youtube-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import logoempresa from "../../../.././../assets/img/logoempresa.png"
import { getDatosConsultorio } from "../../../../../services/servicios";


const PosFooter = () => {


  const [datos, setDatos] = useState([])

  useEffect(()=>{
    getDatosConsultorio().then((data)=>{
      console.log(data)
      setDatos(data[0])
    })
  },[])




  return (
    <section className="section_5" id="contactanos">
      <div className="titulo">
        <h2>Contáctanos: </h2> 
      </div>

      <div className="opcion_contacto">
        <div className="opcion">
          <i className="fas fa-map-marked-alt"></i>
          Dirección:  {datos.direccion}
        </div>
        <div className="opcion">
          <i className="fas fa-calendar-alt"></i>
          Horarios: {datos.horario}
        </div>
        <div className="opcion">
          <i className="fas fa-phone-alt"></i>
          Teléfono:  {datos.phone}
        </div>
        <div className="opcion">
          <i className="fas fa-envelope"></i>
          Mail:  {datos.email}
        </div>
      </div>

      <div className="contacto_contenido">

       
       <div className="contenedor_map">
       <MapContainer
          center={[-12.045946075692815, -77.03055653062569]}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-12.045946075692815, -77.03055653062569]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
       </div>

        <div className="footer_contain">
          <div className="footer_logo">
            <img src={logoempresa} alt="Logo parte inferior" />
          </div>
          <div className="footer_nav">
            <ul className="footer_list">
              <li className="footer_link"><a href="#home">Home</a></li>
              <li className="footer_link"><a href="#servicio">Servicios</a></li>
              <li className="footer_link"><a href="#nosotros">Nosotros</a></li>
            </ul>
          </div>
          <div className="footer_redes">
            <img src={face} alt="Logo de facebook" />
            <img src={insta} alt="Logo de instagram" />
            <img src={youtube} alt="Logo de youtube" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PosFooter;
