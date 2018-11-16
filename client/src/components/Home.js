import React, { Component } from "react";
import "./style/Welcome.css";
import { Link, Redirect } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import * as actions from "../redux/modules/actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
 
  }

  componentDidUpdate() {
  
  }

  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col s12" />
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
