import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";
import "materialize-social/materialize-social.css";
import GoogleLogin from "react-google-login";
class Google extends Component {
  responseGoogle = response => {
    console.log(response);
    this.props.googleSignIn(response, () => {
      this.props.history.push("/home");
    });
  };

  render() {
    return (
      <div className="col s6">
        <GoogleLogin
          clientId="970171233090-9vn8tgslea4i26o5hcfskbg2ic1l3ao1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
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
)(Google);
