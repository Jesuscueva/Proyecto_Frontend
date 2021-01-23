import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import PosRouter from "./modules/pos/PosRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pos" component={PosRouter} />
        <Route path="/admin" component={AdminRouter} />
        <Redirect to="/pos/home"/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
