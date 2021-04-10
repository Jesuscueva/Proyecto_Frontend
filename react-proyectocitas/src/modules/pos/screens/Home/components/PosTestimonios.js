import React, { useEffect, useState } from 'react'
import { getTestimonios } from '../../../../../services/servicios'
import PosTestimonio from './PosTestimonio'


const PosTestimonios = () => {

  const testimonio = [
    {
      "id": "1",
      "nom_usu": "Laverne Goodwin",
      "text_usu": "eniam quoseniam quoseniam quoseniam quoseniam quoseniam quoseniam quoseniam quoseniam quos"
    },
    {
      "id": "2",
      "nom_usu": "Elmo Watsica",
      "text_usu": "onsectetur adipisicionsectetur adipisicing elit. Odio sint sequi, ipsa providee"
    },
    {
      "id": "3",
      "nom_usu": "Anastacio Schmitt",
      "text_usu": " ipsum do ipsum do ipsum do ipsum do"
    },
    {
      "id": "4",
      "nom_usu": "Osbaldo Price",
      "text_usu": " ipsum do ipsum do ipsum do ipsum do ipsum do"
    },
    {
      "id": "5",
      "nom_usu": "Clement Kilback",
      "text_usu": " ipsum do ipsum do ipsum do ipsum do"
    }
  ]
   
  const [posicion, setPosicion] = useState(0)
  // const [testimonio, setTestimonio] = useState([])
 
    // useEffect(()=> {
    //   getTestimonios().then((data)=> {

    //     setTestimonio(data)
    //   })
    // }, [])
  


    return (
        <section className="section_4">

        <article className="descripcion">
          <h3>Testimonios</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sint sequi, ipsa provident quos accusantium?</p>
        </article>
        <article className="testimonios">
            <div className="card_testimonio ">
              <i className="fas fa-angle-left cambio" onClick={()=>{
                if(posicion === 0 ){
                  return
                }
                setPosicion(posicion - 1)
              }}></i>
                 <PosTestimonio obj={testimonio[posicion]}/> 
              <i className="fas fa-angle-right cambio" onClick={()=>{
                if(posicion === testimonio.length - 1){
                  return;
                }
                setPosicion(posicion + 1)
              }}></i>
            </div>
          </article>
      </section>

    )
}

export default PosTestimonios
