import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Signout from "../auth/Signout";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../style/Partials.css";
import dayWon_logo from "../../images/dayWon.png";

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleSignOut = () => {
    console.log("signout clicked");
    this.props.signout();
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    console.log(this.props);
    console.log("logging auth");

    return (
      <div className="header flex-container">
        <div className="logo">
          <Link to="/home" className="logo">
            <img src={dayWon_logo} alt="dayWon logo" />
          </Link>
        </div>
        <div className="header__icons flex-container">
          <div className="line" />
          <div className="signOut">
            <Signout />
          </div>
          <div className="1h header__icons--color">
            <Link to="/workout">
              <button>Start Workout</button>
            </Link>
          </div>
          <div className="2h header__icons--color">
            <Link to="/home">
              <button>Dashboard</button>
            </Link>
          </div>
          <div className="3h header__icons--color">
            <Link to="workout-week">
              <button>View Workouts</button>
            </Link>
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
)(Header);

// component sidebar
