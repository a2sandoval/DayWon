import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import DailyView from "../workouts/DailyView";
import WeeklyView from "../workouts/WeeklyView";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "../style/Partials.css";

class Header extends Component {
  state = {
    anchorEl: null
  };

  handleSignOut = () => {};

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
    if (!localStorage.getItem("token")) {
      return (
        <div className="header">
          <div className="logo">DayWon</div>
        </div>
      );
    } else {
      return (
        <div className="header flex-container">
          <div className="logo">
            <Link to="/home" className="logo">
              DayWon
            </Link>
          </div>
          <div className="header__icons flex-container">
            <div className="line" />
            <div className="signOut" />
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
}

function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(
  mapStateToProps,
  actions
)(Header);

// component sidebar
