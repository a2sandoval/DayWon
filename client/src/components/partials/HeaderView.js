import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style/Partials.css";
import dayWon_logo from "../../images/dayWon.png";
import { Link, Redirect } from "react-router-dom";
import DailyView from "../workouts/DailyView";
import WeeklyView from "../workouts/WeeklyView";

import * as AuthService from "../../utils/AuthService";
// import './Header.css';

class HeaderView extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  //end jakes code
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      profile: PropTypes.object,
      error: PropTypes.object
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired
  };

  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
    this.props.history.push({ pathname: "/" });
  };

  // old code
  // handleSignOut = () => {
  //   console.log("signout clicked");
  //   this.props.signout();
  // };

  render() {
    const { auth } = this.props;
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
            {" "}
            {auth.isAuthenticated ? (
              <div>
                <img src={auth.profile.picture} height="40px" alt="profile" />
                <span>Welcome, {auth.profile.nickname} to DayWon!</span>
                <button onClick={this.handleLogoutClick}>Logout</button>
              </div>
            ) : (
              <button onClick={this.handleLoginClick}>Login</button>
            )}
            {auth.error && <p>{JSON.stringify(auth.error)}</p>}
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

export default HeaderView;
