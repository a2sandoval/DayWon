import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Header from "./partials/Header";
import Home from "./Home";
import User from "./User/User";
import WeeklyView from "./workouts/WeeklyView";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import * as AuthService from "../utils/AuthService";

class AppView extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    loginError: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired
  };

  UNSAFE_componentWillMount() {
    const { history, loginError, loginSuccess } = this.props;
    // Add callback for lock's `authenticated` event
    AuthService.lock.on("authenticated", authResult => {
      AuthService.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return loginError(error);
        }
        AuthService.setToken(authResult.idToken); // static method
        AuthService.setProfile(profile); // static method
        loginSuccess(profile);
        //Once logged in  and authenticated go to this path
        history.push({ pathname: "/dashboard" });
        AuthService.lock.hide();
      });
    });
    // Add callback for lock's `authorization_error` event
    AuthService.lock.on("authorization_error", error => {
      loginError(error);
      //if not logged in, or error logging in, go to NotFoundPage
      history.push({ pathname: "/NotFoundPage" });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/User" component={User} />
          <Route exact path="/workout-week" component={WeeklyView} />
          <Route exact path="/NotFoundPage" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default AppView;
