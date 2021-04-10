import React from 'react'
import vet2 from "../../../../../assets/img/vet2.png"
import vet1 from "../../../../../assets/img/vet1.png"
import vet3 from "../../../../../assets/img/vet3.png"


const PosVeterinarios = () => {
    return (
        <section className="section_3" id="nosotros">
        <article className="conocenos">
          <h2>Nuestro equipo de veterinarios</h2>
          <p>Tenemos un staff especializado de Veterinarios con más de 10 años de experiencia, entregados al servicio de tu mascota</p>
        </article>
        <article className="veterinarios">
          <div className="next"></div>
          <div className="veterinario">
            <figure className="veterinario_img">
              <img src={vet1} alt="" />
            </figure>
            <h4>Carmen Ortiz</h4>
            <p>
              Profesional con más de 7 años de experiencia en vacunación.
            </p>
          </div>
          <div className="veterinario">
            <figure className="veterinario_img">
              <img src={vet2} alt="" />
            </figure>
            <h4>Romina Cavero</h4>
            <p>
              LEspecialista en Cuidado interno de las mascotas.
            </p>
          </div>
          <div className="veterinario">
            <figure className="veterinario_img">
              <img src={vet3} alt="" />
            </figure>
            <h4>Jorge Montes</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad.
            </p>
          </div>
          <div className="back"></div>
        </article>
      </section>
    )
}

export default PosVeterinarios
