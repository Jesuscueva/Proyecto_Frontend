import React from 'react'
import { Link } from 'react-router-dom'
import dog from '../../../../../assets/img/dog-photo.png'
const PosHero = () => {
    return (
        <section className="section_1">
            <article className="columna_1">
              <div className="info">
                <h1 className="info_subtitulo">
                   Cuidamos a tu compañero de travesuras
                </h1>
               <p className="info_parrafo">
                  Servicios especializados de cuidado para tu mascota.
               </p>
               <button className="info_btn">
                 <Link className="link3" to="/pos/login" >Reserva tu Cita</Link>
               </button>
              </div>
            </article>
            <article className="columna_2">
              <figure className="imagen">
                <img src={dog} alt="Imagen principal" />
              </figure>
            </article>
          </section>

    )
}

export default PosHero
