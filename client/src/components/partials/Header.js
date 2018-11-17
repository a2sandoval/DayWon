
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import { withRouter } from "react-router-dom";
import { authActions } from "../../redux/modules/auth";
import HeaderView from "./HeaderView";

// Code for redux and auth-0
const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(authActions.loginRequest()),
  logoutSuccess: () => dispatch(authActions.logoutSuccess())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderView)
);
