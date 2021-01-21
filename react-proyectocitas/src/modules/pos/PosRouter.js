import React from 'react';
import {Switch, Route} from 'react-router-dom'
import PosPrincipalScreen from './screens/principal/PosPrincipalScreen';

const PosRouter = () => {
    return (
        <Switch>
            <Route path="/pos/home" component={PosPrincipalScreen} />
        </Switch>
    )
}

export default PosRouter
