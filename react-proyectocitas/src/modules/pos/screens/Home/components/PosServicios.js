import React, {useState} from 'react'
import vacuna from '../../../../../assets/img/vacuna-logo.png'
import ducha from '../../../../../assets/img/ducha-logo.png'
import derma from '../../../../../assets/img/dermatologia-logo.png'
import peluqueria from '../../../../../assets/img/peluqueria-logo.png'
import odonto from '../../../../../assets/img/odontologia-logo.png'
import cat from "../../../../../assets/img/cat-photo.png"
import 'bootstrap/dist/css/bootstrap.min.css'


const PosServicios = () => {
  
  
        return (
          <section className="section_2">

          <input type="radio" id="1" name="image-slide" hidden/>
          <input type="radio" id="2" name="image-slide" hidden/>
          <input type="radio" id="3" name="image-slide" hidden/>
          <input type="radio" id="4" name="image-slide" hidden/>
          <input type="radio" id="5" name="image-slide" hidden/>

               <article className="servicios">
                <h2 className="servicio_subtitulo">
                  Servicios
                </h2>
                <div className="servicios_iconos">
                <div className="contenedor_icono">
                 <label for="1" className="icono"><img src={vacuna} alt="" /></label>
                 <p>Vacunación</p>
                </div>
                 <div className="contenedor_icono">
                   <label for="2" className="icono"><img src={ducha} alt="" /></label>
                   <p>Baño</p>
                 </div>
                 <div className="contenedor_icono">
                   <label for="3" className="icono"><img src={derma} alt="" /></label>
                   <p>Dermatología</p>
                 </div>
                 <div className="contenedor_icono">
                   <label for="4" className="icono"><img src={peluqueria} alt="" /></label>
                   <p>Peluquería</p>
                 </div>
                 <div className="contenedor_icono">
                   <label for="5" className="icono"><img src={odonto} alt="" /></label>
                   <p>Odontología</p>
                 </div>
                </div>
              </article>
               <article className="info_servicios">
                 <div className="contenedor_slide">
                  <div className="img_info">
                      <img src={cat} alt="Imagen de servicios" />
                    </div>
                    <div className="info_individual">
                      <h4 className="info_name">
                        Especialidad 1
                      </h4>
                      <p className="info_parrafo2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem esse assumenda corrupti quia, accusamus voluptatum ullam, debitis tempora aut sit beatae ipsum voluptate.
                      </p>
                    </div>
                 </div>
                 <div className="contenedor_slide">
                  <div className="img_info">
                      <img src={cat} alt="Imagen de servicios" />
                    </div>
                    <div className="info_individual">
                      <h4 className="info_name">
                        Especialidad 2
                      </h4>
                      <p className="info_parrafo2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem esse assumenda corrupti quia, accusamus voluptatum ullam, debitis tempora aut sit beatae ipsum voluptate.
                      </p>
                    </div>
                 </div>
                 <div className="contenedor_slide">
                  <div className="img_info">
                      <img src={cat} alt="Imagen de servicios" />
                    </div>
                    <div className="info_individual">
                      <h4 className="info_name">
                        Especialidad 3
                      </h4>
                      <p className="info_parrafo2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem esse assumenda corrupti quia, accusamus voluptatum ullam, debitis tempora aut sit beatae ipsum voluptate.
                      </p>
                    </div>
                 </div>
                 <div className="contenedor_slide">
                  <div className="img_info">
                      <img src={cat} alt="Imagen de servicios" />
                    </div>
                    <div className="info_individual">
                      <h4 className="info_name">
                        Especialidad 4 
                      </h4>
                      <p className="info_parrafo2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem esse assumenda corrupti quia, accusamus voluptatum ullam, debitis tempora aut sit beatae ipsum voluptate.
                      </p>
                    </div>
                 </div>
                 <div className="contenedor_slide">
                  <div className="img_info">
                      <img src={cat} alt="Imagen de servicios" />
                    </div>
                    <div className="info_individual">
                      <h4 className="info_name">
                        Especialidad 5
                      </h4>
                      <p className="info_parrafo2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem esse assumenda corrupti quia, accusamus voluptatum ullam, debitis tempora aut sit beatae ipsum voluptate.
                      </p>
                    </div>
                 </div>
               </article>
             </section>
        );
      
    
}

export default PosServicios
