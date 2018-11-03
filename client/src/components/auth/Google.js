import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";
import "materialize-social/materialize-social.css";

class Google extends Component {
  //TODO: make this work with redux. Also need to send this to the backend server eventually.
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("clicked");
    this.props.signInGoogle(() => {
      this.props.history.push("/home");
    });
  }

  render() {
    return (
      <div className="col s6">
        <button
          className="waves-effect waves-light btn social google"
          onClick={this.handleClick}
        >
          <i className="fa fa-google" /> Sign in with google
        </button>
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
