import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Dashboard from "./dashboard/Dashboard";
import Tabs from "./partials/Tabs";
import * as actions from "../actions";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/");
      // localStorage.removeItem("token");
    }
    // if (this.props.user.isLoggedIn === false || !this.props.user.isLoggedIn) {
  }

  componentDidUpdate() {
    if (!localStorage.getItem("token")) {
      // if (this.props.user.isLoggedIn === false || !this.props.user.isLoggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    console.log("Home props on render -------------");
    return (
      <div>
        <Grid item xs={12}>
          <Tabs />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ auth, user, classes }) {
  return { auth, user, classes };
}

export default connect(
  mapStateToProps,
  null
)(Home);

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
