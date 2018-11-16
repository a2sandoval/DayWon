import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style/Partials.css";
import dayWon_logo from "../../images/dayWon.png";
import { Link, Redirect } from "react-router-dom";
import DailyView from "../workouts/DailyView";
import WeeklyView from "../workouts/WeeklyView";
// import Dashboard from "../dashboard";

import * as AuthService from "../../utils/AuthService";
// import './Header.css';

class HeaderView extends Component {
  state = {
    anchorEl: null
  };

  border = {
    borderRadius: "50%"
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
    console.log(this.props);
    const { auth } = this.props;
    return (
      <div className="header flex-container">
        <div className="logo">
          <Link to="/dashboard" className="logo">
            <img src={dayWon_logo} alt="dayWon logo" />
          </Link>
        </div>
        {window.localStorage.getItem("profile") ? (
          <div className="header__icons flex-container">
            <div className="line" />
            <div className="signOut">
              <div>
                <img
                  src={auth.profile.picture}
                  height="40px"
                  style={this.border}
                  alt="profile"
                />
                <span>Welcome, {auth.profile.nickname} to DayWon!</span>
                <button onClick={this.handleLogoutClick}>Logout</button>
              </div>
            </div>
            <div className="1h header__icons--color">
              <Link to="/user">
                <button>User Profile</button>
              </Link>
            </div>
            <div className="2h header__icons--color">
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>
            </div>
            <div className="3h header__icons--color">
              <Link to="workout-week">
                <button>View Workouts</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="welcome">
              <p>
                Welcome to DayWon. The ultimate platform for new and lifelong
                lifters to follow top powerlifting programs taht will help you
                put on strength and size. Login in or register to get started
                today.
              </p>
              <button className="login-button" onClick={this.handleLoginClick}>
                Enter
              </button>
            </div>
          </div>
        )}
        {auth.error && <p>{JSON.stringify(auth.error)}</p>}
      </div>
    );
  }
}

export default HeaderView;

// AS Code
{
  /* <div>
        <div>
          <h1>DayWon</h1>
        </div>
        {auth.isAuthenticated ? (
          <div>
            <div className="row">
              <div className="col s12">
                <ul>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/workout">Start Workout</Link>
                  </li>
                  <li>
                    <Link to="/workout-week"> View Workouts</Link>
                  </li>
                </ul>
                <img src={auth.profile.picture} height="40px" alt="profile" />
                <span>Welcome, {auth.profile.nickname} to DayWon!</span>
                <button onClick={this.handleLogoutClick}>Logout</button>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={this.handleLoginClick}>Enter</button>
        )}
        {
          auth.error
          //  && <p>{JSON.stringify(auth.error)}</p>
        }
      </div> */
}
