import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";

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
    return <button onClick={this.handleClick}>Google</button>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Google);
