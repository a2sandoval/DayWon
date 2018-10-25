import React from "react";
import Graph from "./Graph";
import Maxes from "./Maxes";
import MaxCalc from "./MaxCalc";
import Stats from "./Stats";
import Grid from "@material-ui/core/Grid";

const Dashboard = props => {
  console.log("props");
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Graph />
        </Grid>
        <Grid item xs={6}>
          <Maxes />
          <Stats />
          <MaxCalc />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
