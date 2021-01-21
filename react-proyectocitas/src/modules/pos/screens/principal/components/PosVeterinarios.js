import React from 'react'
import vet2 from "../../../../../assets/img/vet2.png"
import vet1 from "../../../../../assets/img/vet1.png"
import vet3 from "../../../../../assets/img/vet3.png"


const PosVeterinarios = () => {
    return (
        <section className="section_3">
        <article className="conocenos">
          <h2>Nuestro equipo de veterinarios</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reiciendis esse dolorem, consequuntur quaerat alias ipsum, maxime delectus excepturi, sint pariatur commodi. Sint, natus nostrum.</p>
        </article>
        <article className="veterinarios">
          <div className="next"></div>
          <div className="veterinario">
            <figure className="veterinario_img">
              <img src={vet1} alt="" />
            </figure>
            <h4>Nombre vet 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad.
            </p>
          </div>
          <div className="veterinario">
            <figure className="veterinario_img">
              <img src={vet2} alt="" />
            </figure>
            <h4>Nombre vet 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad.
            </p>
          </div>
          <div className="veterinario">
            <figure className="veterinario_img">
              <img src={vet3} alt="" />
            </figure>
            <h4>Nombre vet 1</h4>
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
