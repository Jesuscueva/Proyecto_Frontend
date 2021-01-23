import React from 'react';
import {Switch, Route, } from 'react-router-dom'
import PosPrincipalScreen from './screens/Home/PosPrincipalScreen';
import PosLoginPincipalScreen from './screens/login/PosLoginPincipalScreen';

const PosRouter = () => {
    return (
        <Switch>
            <Route path="/pos/home" component={PosPrincipalScreen} />
            <Route path="/pos/login" component={PosLoginPincipalScreen} />
        </Switch>
    )
}

export default PosRouter
