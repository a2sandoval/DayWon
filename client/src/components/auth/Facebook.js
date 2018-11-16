import React, { Component } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import * as actions from "../../actions";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import "materialize-social/materialize-social.css";

//TODO: make this work with redux. Also need to send this to the backend server eventually.
class Facebook extends Component {
  state = {
    isLoggedIn: false,
    fbLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);
    this.props.facebookSignIn(response, () => {
      this.setState({ isLoggedIn: true });
    });
  };

  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="col s6">
        <FacebookLogin
          appId="666797230358262"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          size="small"
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Facebook);
