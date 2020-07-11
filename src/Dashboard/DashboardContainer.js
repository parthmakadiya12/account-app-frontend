import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DashboardPage from "./Dashboard";
import * as actions from "./dashboardActions";
import * as spinnerActions from "../commons/Spinner/spinnerActions";

const mapStateToProps = (state) => {
  const { dashboard, spinner } = state;

  return {
    error: dashboard.error,
    invoices: dashboard.invoices,
    spinner:spinner.showSpinner
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions, ...spinnerActions }, dispatch);

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DashboardPage);
