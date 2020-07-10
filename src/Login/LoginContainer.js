import { compose } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import LoginPage from "./Login";
import * as actions from "./loginActions";

const mapStateToProps = state => {
    const { login } = state;

    return {
        token: login.token 
    };
};
const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions }, dispatch);

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(LoginPage);