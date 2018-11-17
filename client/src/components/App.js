
import * as actions from "../redux/modules/actions";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { authActions } from "../redux/modules/auth";
import AppView from "./AppView";



const mapDispatchToProps = dispatch => ({
  loginSuccess: profile => dispatch(authActions.loginSuccess(profile)),
  loginError: error => dispatch(authActions.loginError(error)),
  actions
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AppView)
);
