import React from 'react'
import testi from "../../../../../assets/img/testimonio1-photo.png"

const PosTestimonios = () => {
    return (
        <section className="section_4">

        <article className="descripcion">
          <h3>Testimonios</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sint sequi, ipsa provident quos accusantium?</p>
        </article>
          <article className="testimonios">
            <div className="card_testimonio ">
              <i className="fas fa-angle-left cambio"></i>
             <div className="">
              <img src={testi} alt="Usuario con su testimonio" />
              <h4>Testimonio #1</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur harum id suscipit aliquid maxime alias, aliquam nihil et voluptatem in.</p>
             </div>
              <i className="fas fa-angle-right cambio"></i>
            </div>
          </article>
      </section>

    )
}

export default PosTestimonios
