import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";

//TODO: make this work with redux. Also need to send this to the backend server eventually.
class Facebook extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("clicked");
    this.props.signInFacebook(() => {
      this.props.history.push("/home");
    });
  }

  render() {
    return <button onClick={this.handleClick}>Facebook</button>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Facebook);
