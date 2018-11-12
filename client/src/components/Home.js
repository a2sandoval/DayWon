import React, { Component } from "react";
import "./style/Welcome.css";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import * as actions from "../actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    if (
      !localStorage.getItem("token") &&
      !localStorage.getItem("tokenFB") &&
      !localStorage.getItem("tokenGoog")
    ) {
      this.props.history.push("/");
    }
    if (localStorage.getItem("token")) {
      this.props.authUser(() => {
        console.log("authUser");
      });
    }
  }

  componentDidUpdate() {
    if (
      !localStorage.getItem("token") &&
      !localStorage.getItem("tokenFB") &&
      !localStorage.getItem("tokenGoog")
    ) {
      this.props.history.push("/");
    }
    console.log(this.props.user);
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col s12">
          <Dashboard />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, user, classes }) {
  return { auth, user, classes };
}

export default connect(
  mapStateToProps,
  actions
)(Home);

// this page will have a graph of workouts and weight lifted, three lines for power three
// below will be number of days completed and total volume lifted

// below the graph will be daily tips
// to the right side of the graph will be current maxes and training maxes. There will be an update button for if any maxes have changed
