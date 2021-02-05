import React, {useEffect, useState} from 'react'
// import vacuna from '../../../../../assets/img/vacuna-logo.png'
// import ducha from '../../../../../assets/img/ducha-logo.png'
// import derma from '../../../../../assets/img/dermatologia-logo.png'
// import peluqueria from '../../../../../assets/img/peluqueria-logo.png'
// import odonto from '../../../../../assets/img/odontologia-logo.png'
import cat from "../../../../../assets/img/cat-photo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import { getServicios } from '../../../../../services/servicios'


const PosServicios = () => {
  
  const [servicios, setServicios] = useState([])

  useEffect(()=>{
    getServicios().then((data)=>{
      setServicios(data)
    })
  },[])
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
                {
                  servicios.map((servicio)=>{
                    return <div key={servicio.Id} className="contenedor_icono">
                    <label htmlFor={servicio.Id} className="icono"><img src={servicio.icon_servicio} alt="" /></label>
                    <p>{servicio.nombre_servicio}</p>
                   </div>
                  })
                }
                </div>
              </article>
               <article className="info_servicios">
                 {
                   servicios.map((servicio)=>{
                     return (
                      <div className="contenedor_slide">
                      <div className="img_info">
                          <img src={cat} alt="Imagen de servicios" />
                        </div>
                        <div className="info_individual">
                          <h4 className="info_name">
                            {servicio.nombre_servicio}
                          </h4>
                          <p className="info_parrafo2">
                           {servicio.info_servicio}
                          </p>
                        </div>
                     </div>
                     )
                   })
                 }          
               </article>
             </section>
        );
      
    
}

export default PosServicios
