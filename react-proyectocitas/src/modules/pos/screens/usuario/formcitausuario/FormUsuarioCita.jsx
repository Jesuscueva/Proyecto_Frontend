import React, { useState, useEffect, useContext } from 'react'
import moment from "moment"

import ModalCitaForm from './ModalCitaForm'
import PosContext from '../../../../../context/pos/posContext'



const FormUsuarioCita = () => {

    
    const {setModalCita, setFechaSeleccionada} = useContext(PosContext)

    //CREAMOS UNA VARIABLE CALENDAR EL CUAL VA ALMACENAR LOS DIAS
    //DEL CALENDARIO Y COMENZARÁ CON UN ARRAY VACIO

    const [calendar, setCalendar] = useState([])

    //CREAMOS UNA VARIABLE VALUE QUE INICIA CON LA FUNCIÓN MOMENT()
    //Y LO MODIFICAMOS CON SETVALUE
    const [value, setValue ]= useState(moment())

    //STARDAY SERÁ EL PRIMER DÍA DE LA SEMANA  DEL CALENDARIO SEGUN EL MES
    // PARA ELLO LLAMAMOS A LA FUNCION .startOf("month") -EL MES
    //startOf("week") - EL PRIMER DIA DE LA PRIMERA SEMANA 
    //EJEMPLO: ENERO 2021 - EL PRIMER DIA DEL CALENDARIO ES 27
    const startDay = value.clone().startOf("month").startOf("week")

    //ENDDAY SERÁ EL ULTIMO DÍA DE LA SEMANA DEL CALENDARIO SEGUN EL MES
    //ENDOF("month") = MES  
    //ENDOF("week") = EL ULTIMO DIA DE LA SEMANA SEGUN EL CALENDARIO  
    //EJEMPLO: ENERO 2021 - ULTIMO DIA DEL CALENDARIO ES 6
    const endDay = value.clone().endOf("month").endOf("week")

    //DIA ANTEIOR DEL CALENDARIO SUBTRACT(1, "DAY") RESTAR UN DIA
    const day = startDay.clone().subtract(1, "day")

    
    useEffect(()=>{
        const a = []

    //ISBEFORE = FALSE
    while(day.isBefore(endDay, "day")){
        //ME AGREGARA LOS DIAS EN UN ARRAY
        a.push(
            //UN CONSTRUCTOR ARRAY DE 7 ELEMENTOS Y RETORNA LOS DIAS DE LA SEMANA
            Array(7).fill(0).map(()=> day.add(1, "day").clone())
            )
    }

    //SETEAMOS EL VALOR LA VARIABLE CALENDARIO CON LOS DIAS AGREGADOS
    setCalendar(a)
}, [value])

//LLAMAMOS A LA FUNCION PARA COLOCAR EL MES
const mesDelCalendario = ()=>{
    return value.format("MMMM")
}
//LLAMAMOS A LA FUNCION PARA COLOCAR EL MES
const añoDelCalendario = ()=>{
    return value.format("YYYY")
}
//FUNCION PARA IR AL ANTERIOR MES CON SUBTRACT
const anteriorMes = ()=> {
    return value.clone().subtract(1, "month")
}
//FUNCION PARA IR AL SIGUIENTE MES CON ADD
const siguienteMes = ()=>{
    return value.clone().add(1, "month")
}

//FUNCION PARA ABRIR EL MODAL Y AGENDAR 
const agendar = () =>{
    setModalCita(true)
}


    return (
        <>
        <div className="seleccion_cita">
        <div className="titulo_calendario">
            <h3>Selecciona el día de tu cita:</h3>
        </div>
        <div className="cabecera_calendario">
            <div className="anterior_mes" onClick={
              ()=>{
                setValue(anteriorMes())
              }
            }> 
            <i className="fas fa-angle-double-left"></i>
            </div>
            <div className="mes_año">
                {mesDelCalendario()} &nbsp; {añoDelCalendario()}
            </div>
            <div className="siguiente_mes" onClick={()=>{
                setValue(siguienteMes())
            }
            }> <i className="fas fa-angle-double-right"></i></div>
        </div>
        <div className="calendario">
            <div className="nombre_dias">
                {
                    ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"].map((dia)=>{
                        return <div className="nom_dia" key={dia}><p>{dia}</p></div>
                    })
                }
            </div>
           {
               //MAPEAMOS LA VARIABLE CALENDARIO EL CUAL ALMACENA ARRAYS = SEMANA
               calendar.map((week)=>(
                   <div>
                      {
                          //MAPEAMOS CADA SEMANA Y RETORNAMOS LOS DIAS EN UN DIV
                          week.map((days_del_mes)=>(
                              <div className="day" onClick={()=>{
                                  agendar()
                                  setFechaSeleccionada(days_del_mes.format("DD/MM/YY"))
                              }} >
                                  
                                  <p key={days_del_mes}>{days_del_mes.format("D").toString()}</p>
                              </div>
                          ))
                        }
                  </div> 
               ))
            }
        </div>
        </div>

        <ModalCitaForm />
            </>
    )
}

export default FormUsuarioCita
