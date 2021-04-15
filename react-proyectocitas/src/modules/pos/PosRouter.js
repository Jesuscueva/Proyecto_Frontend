import React from 'react';
import {Switch, Route, } from 'react-router-dom'
import PosPrincipalScreen from './screens/Home/PosPrincipalScreen';
import PosLoginPincipalScreen from './screens/login/PosLoginPincipalScreen';
import PosRegisterPrincipalScreen from './screens/register/PosRegisterPrincipalScreen';

import PosState from '../../context/pos/posState';
import FormUsuarioCita from './screens/usuario/formcitausuario/FormUsuarioCita.jsx';
import PosPrincipalUsuarioScreens from './screens/usuario/screens/PosPrincipalUsuarioScreens';
import Private from '../../Private';
import AuthState from '../../context/auth/authState';


const PosRouter = () => {
    return (
        <AuthState>

        <PosState >

        <Switch>
            <Route path="/pos/home" component={PosPrincipalScreen} />
            <Route path="/pos/login" component={PosLoginPincipalScreen} />
            <Route path="/pos/register" component={PosRegisterPrincipalScreen}/>
            <Private path="/pos/usuario/cita" component={FormUsuarioCita} />
            <Private path="/pos/usuario" component={PosPrincipalUsuarioScreens}/>
        </Switch>


        </PosState>
        </AuthState>

    )
}

export default PosRouter


