import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./Home";
import Welcome from "./Welcome";
import DailyView from "./workouts/DailyView";
import WeeklyView from "./workouts/WeeklyView";
import Settings from "./settings/Settings";
import NoMatch from "./settings/NoMatch";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/workout" component={DailyView} />
            <Route exact path="/workout-week" component={WeeklyView} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
