import React, { Component } from "react";
import PropTypes from "prop-types";
import "../style/Partials.css";
import "../style/User.css";
import dayWon_logo from "../../images/DayWon.png";
import { Link, Redirect } from "react-router-dom";

import * as AuthService from "../../utils/AuthService";


class HeaderView extends Component {
  state = {
    anchorEl: null,
    open: false
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

  settingsRender = open => {
    !open ? this.setState({ open: false }) : this.setState({ open: true });
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


  render() {
    console.log(this.props);
    const { auth } = this.props;
  
    return (
      <div className="header flex-container">
        <div className="logo">
    
            <img src={dayWon_logo} alt="dayWon logo" />
    
        </div>
        {window.localStorage.getItem("profile") ? (
          <div className="header__icons flex-container">
            <div className="line" />
            <div className="signOut">
              <div>
                <img
                  src={auth.profile.picture}
                  height="60px"
                  style={this.border}
                  alt="profile"
                />
               
                <span>Welcome, {auth.profile.nickname}  </span>
                <button onClick={this.handleLogoutClick}>logout</button>
              </div>
            </div>
<<<<<<< HEAD
            <div className="first_header__icons--color">
              <Link to="/user">
                <button>User Profile</button>
              </Link>
=======
            <div className="1h header__icons--color">
              <button
                onClick={() => {
                  this.settingsRender("open");
                }}
              >
                Settings
              </button>
              <Modal
                className="col s6 offset-s3 max-calc"
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={() => this.settingsRender()}
              >
                <div className="settings-modal">
                  <Settings
                    settings={this.props.settings}
                    measurement={this.props.measurement}
                    submitSettings={this.props.submitSettings}
                  />
                </div>
              </Modal>
>>>>>>> 72345663de1bef16630ca6826c07e496b1c058eb
            </div>
            <div className="second_header__icons--color">
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>
            </div>
            <div className="third_header__icons--color">
              <Link to="workout-week">
                <button>View Workouts</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="welcome">
              <p>
                Welcome to DayWon. </p>
                <p>
                The Ultimate Platform for New and Lifelong
                Powerlifters. 
              </p>
         
              <button className="login-button" onClick={this.handleLoginClick}>
                Get Jacked!
              </button>
            </div>
          </div>
        )}
        {auth.error && <p>{JSON.stringify(auth.error)}</p>}
      </div>
    );
  }
}

function mapStateToProps({ measurement, user, settings }) {
  return { measurement, user, settings };
}

export default connect(
  mapStateToProps,
  actions
)(HeaderView);

