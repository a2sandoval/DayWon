import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Facebook from "./auth/Facebook";
import Google from "./auth/Google";
class Welcome extends Component {
  state = {
    current: "signup"
  };
  signInOrUp = () => {
    if (this.state.current === "signup") {
      return (
        <div className="col s6" id="button-switch">
          <button className="button-on waves-effect waves-light btn">
            Sign Up
          </button>
          <button
            onClick={() => this.changeButtonState("signin")}
            className="button-off waves-effect waves-light btn"
          >
            Sign In
          </button>
        </div>
      );
    } else if (this.state.current === "signin") {
      return (
        <div className="col s6" id="button-switch">
          <button
            onClick={() => this.changeButtonState("signup")}
            className="button-off waves-effect waves-light btn"
          >
            Sign Up
          </button>
          <button className="button-on waves-effect waves-light btn">
            Sign In
          </button>
        </div>
      );
    }
  };
  changeButtonState = update => {
    this.setState({
      current: update
    });
  };
  renderForm = () => {
    if (this.state.current === "signup") {
      return <Signup />;
    } else {
      return <Signin />;
    }
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/home");
    }
  }
  componentDidUpdate() {
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="row">
        <div className="login-page col s6 offset-s3">
          <div className="row">
            {/* <img src="" */}
            <h1 className="col s6">DayWon</h1>
            {this.signInOrUp()}
          </div>
          <div className="row">{this.renderForm()}</div>
          <hr />
          <div className="row social-buttons">
            <Facebook />
            <Google />
          </div>
          <div className="row">
            <h6 className="col s5 offset-s7">Forgot Password? Click here</h6>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth, user }) {
  return { auth, user };
}
export default connect(
  mapStateToProps,
  actions
)(Welcome);
