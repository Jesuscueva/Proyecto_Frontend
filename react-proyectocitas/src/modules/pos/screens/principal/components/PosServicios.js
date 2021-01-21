import React from 'react'
import vacuna from '../../../../../assets/img/vacuna-logo.png'
import ducha from '../../../../../assets/img/ducha-logo.png'
import derma from '../../../../../assets/img/dermatologia-logo.png'
import peluqueria from '../../../../../assets/img/peluqueria-logo.png'
import odonto from '../../../../../assets/img/odontologia-logo.png'
import cat from "../../../../../assets/img/cat-photo.png"

const PosServicios = () => {
    return (
        <section className="section_2">
            <article className="servicios">
             <h2 className="servicio_subtitulo">
               Servicios
             </h2>
             <div className="servicios_iconos">
             <div className="contenedor_icono">
              <div className="icono"><img src={vacuna} alt="" /></div>
              <p>Vacunación</p>
             </div>
              <div className="contenedor_icono">
                <div className="icono"><img src={ducha} alt="" /></div>
                <p>Baño</p>
              </div>
              <div className="contenedor_icono">
                <div className="icono"><img src={derma} alt="" /></div>
                <p>Dermatología</p>
              </div>
              <div className="contenedor_icono">
                <div className="icono"><img src={peluqueria} alt="" /></div>
                <p>Peluquería</p>
              </div>
              <div className="contenedor_icono">
                <div className="icono"><img src={odonto} alt="" /></div>
                <p>Odontología</p>
              </div>
             </div>
            </article>

            <article className="info_servicios">
              <div className="img_info">
                <img src={cat} alt="Imagen de servicios" />
              </div>
              <div className="info_individual">
                <h4 className="info_name">
                  Especialidad
                </h4>
                <p className="info_parrafo2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem esse assumenda corrupti quia, accusamus voluptatum ullam, debitis tempora aut sit beatae ipsum voluptate.
                </p>
                <button className="btn_services">
                  Conoce más
                </button>
              </div>
            </article>
          </section>
    )
}

export default PosServicios
