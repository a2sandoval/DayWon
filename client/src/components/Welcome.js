import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Facebook from "./auth/Facebook";
import Google from "./auth/Google";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

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
      <div>
        <Facebook />
        <Google />
        <Signin />
        <Signup />
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
