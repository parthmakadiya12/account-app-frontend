import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SignupPage from "./Signup";
import * as actions from "./signupActions";
import * as spinnerActions from "../commons/Spinner/spinnerActions";

const mapStateToProps = (state) => {
  const { signup, spinner } = state;

  return {
    signup: signup.error,
    spinner:spinner.showSpinner
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions, ...spinnerActions }, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignupPage);
