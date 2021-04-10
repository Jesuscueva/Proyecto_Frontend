import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import PosContext from './context/pos/posContext'

const Private = ({path, component: Component}) => {
    const {autenticado} = useContext(PosContext) 

    return (
        <div>
            {
                autenticado ? <Route path={path} component={Component} /> : <Redirect to="/pos/home" />
            }
        </div>
    )
}

export default Private
