import React from 'react'
import dog from '../../../../../assets/img/dog-photo.png'
const PosHero = () => {
    return (
        <section className="section_1">
            <article className="columna_1">
              <div className="info">
                <h2 className="info_subtitulo">
                  Esta es la informacion principal de nuestra pagina web.
                </h2>
               <p className="info_parrafo">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, facere!
               </p>
               <button className="info_btn">
                 Reserva tu Cita
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
