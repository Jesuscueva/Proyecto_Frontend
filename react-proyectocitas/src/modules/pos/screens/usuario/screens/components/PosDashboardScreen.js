import React, { useContext, useEffect, useState } from "react";
import {Spinner} from 'reactstrap'
import PosContext from "../../../../../../context/pos/posContext";
import { getCitasRegistradas } from "../../../../../../services/servicios";

const PosDashboardScreen = () => {

    const {usu_nom} = useContext(PosContext)

    const [citas, setCitas] = useState([])

    const imagenes = [
        {
            promo_img: "https://picsum.photos/200/210",
        },
        {
            promo_img: "https://picsum.photos/200/211",
        },
        {
            promo_img: "https://picsum.photos/200/212",
        },
        {
            promo_img: "https://picsum.photos/200/211",
        },
        {
            promo_img: "https://picsum.photos/200/218",
        },
        {
            promo_img: "https://picsum.photos/200/210",
        },
        {
            promo_img: "https://picsum.photos/200/210",
        },
        {
            promo_img: "https://picsum.photos/200/210",
        },
        {
            promo_img: "https://picsum.photos/200/210",
        },
        {
            promo_img: "https://picsum.photos/200/210",
        },
    ]


    useEffect(()=>{
        getCitasRegistradas().then((data)=>{
            setCitas(data)
        })
    },[])

  return (
    <>
      <main className="contenedor_promociones">
        <div className="title_promo">
          <i class="fas fa-chevron-circle-left" onClick={()=>{
          }}></i>
          <h1>Promociones del mes</h1>
          <i class="fas fa-chevron-circle-right"></i>
        </div>
        <div className="contenedor__promos">
            {
                imagenes.map((imagen)=>{
                    return ( 
                          <figure>
                               <img src={imagen.promo_img} alt=""/>
                          </figure>
                    )
                })
            }
        </div>
        <div className="titulo_tabla">
            <h2>Proximas Citas</h2>
        </div>
          
            <table className="tabla_citas">
                <thead className="tabla_header">
                    <tr className="tabla_secciones">
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Servicio</th>
                        <th>Mascota</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody className="tabla_body">
                    {
                        citas.map((cita)=>{
                            if(cita.nom_usu === usu_nom){
                                return  <tr className="tabla_secciones">
                            <th>{cita.fecha_selec}</th>
                            <th>{cita.hora_selec}</th>
                            <th>{cita.service_selec}</th>
                            <th>{cita.mascota_selec}</th>
                            <th>Pendiente</th>
                        </tr>
                            }
                        })
                        
                    }

                </tbody>
            </table>

      </main>
    </>
  );
};

export default PosDashboardScreen;
