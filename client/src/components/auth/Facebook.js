import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { connect } from "react-redux";
import "materialize-social/materialize-social.css";

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
    return (
      <div className="col s6">
        <button
          onClick={this.handleClick}
          className="waves-effect waves-light btn social facebook "
        >
          <i className="fa fa-facebook" /> Sign in with facebook
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
)(Facebook);
