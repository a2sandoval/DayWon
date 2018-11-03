import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./Home";
import DailyView from "./workouts/DailyView";
import WeeklyView from "./workouts/WeeklyView";
import Settings from "./settings/Settings";
import Welcome from "./Welcome";
import Workouts from "./workouts/workouts";
import Videos from "./videos/Videos";
import Calculator from "./sidebarFeats/calculator/Calc";
import UserHistory from "./sidebarFeats/userHistory/HistoryLogs";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <div className="container-no">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Welcome} />
            {/* <Route exact path="/register" component={Measurements} />  */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/workout" component={DailyView} />
            <Route exact path="/workout-week" component={WeeklyView} />
            {/* Making this tabs <Route exact path="/workouts" component={Workouts} /> */}
            {/* <Route exact path="/videos" component={Videos} /> */}
            {/* Might make these modals <Route exact path="/settings" component={Settings} />
            <Route exact path="/calc" component={Calculator} />
            <Route exact path="/history" component={UserHistory} /> */}

            {/* <Route path="/surveys/new" component={SurveyNew} /> */}
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
