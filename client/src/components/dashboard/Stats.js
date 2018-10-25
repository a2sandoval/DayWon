import React, { Component } from "react";
import { connect } from "react-redux";

class JuggStats extends Component {
  logged = () => {};

  volume = () => {};

  render() {
    return (
      <div className="stats">
        <h3 className="logged">Days Logged: {this.logged}</h3>
        <h3 className="volume">Total Volume: {this.volume}</h3>
      </div>
      // number of days logged
      // total volume
      // strength increases by lift
    );
  }
}

function mapStateToProps({ JuggStats }) {
  return { JuggStats };
}

export default connect(mapStateToProps)(JuggStats);
