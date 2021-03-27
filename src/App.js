import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import React from "react";
import Cookies from "./cookies";
import Chips from "./chips";
import Soda from "./soda";

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/cookies" exact>
          <Cookies />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
