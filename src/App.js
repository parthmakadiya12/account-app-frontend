import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import { connect } from "react-redux";

import NotFound from "./helpers/NotFound";
import Login from "./Login/LoginContainer";
import SignUp from "./Signup/SignupContainer";
import Dashboard from "./Dashboard/DashboardContainer";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

export const history = createHistory();

function App(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute exact path='/dashboard' token={props.token} handleLogout={()=>history.push('/')} component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state) => {
  const { login } = state;
  return {
    token: login.token,
  };
};
export default connect(mapStateToProps, {})(App);
