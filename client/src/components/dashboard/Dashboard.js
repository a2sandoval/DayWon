import React from "react";
import Graph from "./Graph";
import Maxes from "./Maxes";
import MaxCalc from "./MaxCalc";
import Stats from "./Stats";
import "../style/Dashboard.css";

const graphStyle = {
  height: "500px"
};

const Dashboard = props => {
  console.log("props");
  return (
    <div className="row">
      <div className="graph-component col s10 offset-s1 l6" style={graphStyle}>
        Graph
      </div>
      <div className="s9 offset-s1 l6">
        <Maxes />
      </div>
    </div>
  );
};

export default Dashboard;

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
