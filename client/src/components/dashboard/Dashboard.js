import React, { Component } from "react";
import Graph from "./Graph";
import Intro from "./Intro";
import Pie from "./Pie2";
import PieStats from "./PieStats";
import MaxCalc from "./MaxCalc";
import Stats from "./Stats";
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";

class Dashboard extends Component {
  componentDidMount() {
    if (localStorage.getItem("profile")) {
      console.log(localStorage.getItem("profile"));
      let profile = JSON.parse(localStorage.getItem("profile"));
      this.props.userToDb(profile, () => {
        console.log("handled user");
        console.log(this.props.user);
        this.props.fetchSettings(this.props.user);
        this.props.getAccesWorkoutData(this.props.user.workoutsId, () => {
          console.log(this.props);
        });
      });
    }
  }

  componentWillUnmount() {
    this.props.fetchSettings(this.props.user);
  }

  render() {
    return (
      <div className="dash-components">
        <div className="row">
          <div className="s12">
            <Intro />
          </div>
          <div className="graph-component col s6">
            <Graph measurement={this.props.measurement} />
          </div>
          <div className="pie-chart col s6" id="pie-chart">
            <Pie measurement={this.props.measurement} />
            <PieStats measurement={this.props.measurement} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ measurement, user }) {
  return { measurement, user };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
