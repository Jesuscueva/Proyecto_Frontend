import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import PosRouter from "./modules/pos/PosRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pos" component={PosRouter} />
        {/* <Route path="/" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
