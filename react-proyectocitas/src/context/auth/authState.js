import React, { useState } from 'react'
import AuthContext from './authContext'
import { useHistory } from "react-router-dom";


const AuthState = ({children}) => {

    const history = useHistory()

    const [sesion, setSesion] = useState({
        autenticado: true,
        nombre: null,
        apellido: null,
        token: null,
        cargando: true
    })

    const sesionCorrecta = token =>{
        localStorage.setItem("token", token)
        const payload = token.split(".")[1]
        console.log(payload)
        const desencriptado = window.atob(payload)
        console.log(desencriptado)
        const json = JSON.parse(desencriptado)
        console.log(json)
        setSesion({
            autenticado: true,
            nombre: json.usuarioNombre,
            apellido: json.usuarioApellido,
            token: token,
            cargando: false
        })
    }

    const cerrarSesion = () => {
        localStorage.removeItem("token")
        history.replace("/")
        setSesion({
            autenticado: false,
            nombre: null,
            apellido: null,
            token: null,
            cargando: true
        })
    }

    return (
        <AuthContext.Provider value={{
            autenticado: sesion.autenticado,
            nombre: sesion.nombre,
            apellido: sesion.apellido,
            token: sesion.token,
            cargando: sesion.cargando,
            sesionCorrecta : sesionCorrecta,
            cerrarSesion: cerrarSesion
        }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}


export default AuthState