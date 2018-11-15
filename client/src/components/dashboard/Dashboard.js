import React, { Component } from "react";
import Graph from "./Graph";
import Maxes from "./Maxes";
import MyPie from "./Pie";
import PieStats from "./PieStats";
import MaxCalc from "./MaxCalc";
import Stats from "./Stats";
import "../style/Dashboard.css";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div className="dash-components">
        <div className="row">
          <div className="s12">
            <Maxes />
          </div>
          <div className="graph-component col s9">
            <Graph measurement={this.props.measurement} />
          </div>
          <div className="pie-chart col s3" id="pie-chart">
            <MyPie measurement={this.props.measurement} />
            <PieStats measurement={this.props.measurement} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ measurement }) {
  return { measurement };
}

export default connect(mapStateToProps)(Dashboard);

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
