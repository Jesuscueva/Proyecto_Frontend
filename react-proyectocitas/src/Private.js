import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './context/auth/authContext'
import PosContext from './context/pos/posContext'

const Private = ({path, component: Component}) => {
    const {autenticado} = useContext(AuthContext) 
    // const autenticado = false
    return (
        <div>
            {
                autenticado? <Route path={path} component={Component} /> : <Redirect to="/" />
            }
        </div>
    )
}

export default Private
