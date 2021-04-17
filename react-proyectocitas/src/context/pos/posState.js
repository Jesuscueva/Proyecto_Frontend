    import React, {useReducer, useState} from 'react'
import PosContext from './posContext'
import PosReducer from './posResducer'


const PosState = ({children}) => {


    const [state, dispatch] = useReducer(PosReducer, {
        modal_cita: false,
        fecha_seleccionada: null,

        //login
        autenticado: false,
        usu_nom:"",
        apellido_usu: ""
    })

    const setModalCita = (valor)=>{
        dispatch({
            type: "MODAL_CITA",
            data: valor
        })
    }
    const setFechaSeleccionada = (valor)=>{
        dispatch({
            type: "FECHA_SELECCIONADA",
            data:valor
        })
    }

    const setAutenticando = (valor) =>{
        dispatch({
            type: "AUTENTICADO",
            data:valor
        })
    }

    const guardarTokenSesion = (token="")=>{
        localStorage.setItem("token", token)
    }

    const setNombreUsuario = (valor) =>{
        dispatch({
            type: "NOMBRE_USUARIO",
            data: valor
        })
    }
    const setApellido = (valor) =>{
        dispatch({
            type:"APELLIDO_USUARIO",
            data: valor
        })
    }

    return (
        <PosContext.Provider value={
            {
                modal_cita: state.modal_cita,
                setModalCita: setModalCita,
                fecha_seleccionada: state.fecha_seleccionada,
                setFechaSeleccionada: setFechaSeleccionada,

                autenticado: state.autenticado,
                setAutenticando: setAutenticando,
                guardarTokenSesion: guardarTokenSesion,

                usu_nom: state.usu_nom,
                setNombreUsuario: setNombreUsuario,
                apellido_usu: state.apellido_usu,
                setApellido: setApellido,
            }
        }>
            {children}
        </PosContext.Provider>
    )
}

export default PosState
