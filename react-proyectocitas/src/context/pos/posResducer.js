const PosReducer = (stateActual, action) =>{
    

    console.log("-------------------")
    console.log(stateActual)
    console.log("********************")
    console.log(action)

    if(action.type === "MODAL_CITA"){
        return{
            ...stateActual,
            modal_cita: action.data
        }
    }

    if(action.type === "FECHA_SELECCIONADA"){
        return{
            ...stateActual,
            fecha_seleccionada: action.data,
        }
    }
    if(action.type === "AUTENTICADO"){
        return{
            ...stateActual,
            autenticado: action.data
        }
    }
    if(action.type === "NOMBRE_USUARIO"){
        return{
            ...stateActual,
            usu_nom: action.data,
            
        }
    }
    if(action.type === "APELLIDO_USUARIO"){
        return{
            ...stateActual,
            apellido_usu: action.data
        }
    }
}

export default PosReducer