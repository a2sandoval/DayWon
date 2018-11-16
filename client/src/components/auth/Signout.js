import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
class Signout extends Component {
  signout = () => {
    this.props.signout();
  };
  render() {
    return <button onClick={this.signout}>Signout</button>;
  }
}
export default connect(
  null,
  actions
)(Signout);
