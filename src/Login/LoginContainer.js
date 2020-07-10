import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginPage from "./Login";
import * as actions from "./loginActions";
import * as spinnerActions from "../commons/Spinner/spinnerActions";

const mapStateToProps = (state) => {
  const { login, spinner } = state;

  return {
    token: login.token,
    spinner: spinner.showSpinner,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions, ...spinnerActions }, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);
