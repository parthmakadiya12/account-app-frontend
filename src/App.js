import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./helpers/NotFound";
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
