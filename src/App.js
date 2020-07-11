import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

import NotFound from "./helpers/NotFound";
import Login from "./Login/LoginContainer";
import SignUp from "./Signup/SignupContainer";
import Dashboard from "./Dashboard/DashboardContainer";
import "./App.css";

export const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
