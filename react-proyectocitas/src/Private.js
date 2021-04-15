import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './context/auth/authContext'

const Private = ({path, component: Component}) => {
    const {autenticado} = useContext(AuthContext) 

    return (
        <div>
            {
                autenticado ? <Route path={path} component={Component} /> : <Redirect to="/pos/home" />
            }
        </div>
    )
}

export default Private
