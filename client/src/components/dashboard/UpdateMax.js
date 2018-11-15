import React, { Component } from "react";
import { string } from "prop-types";

class UpdateMax extends Component {
  state = {
    deadlift: 0,
    squat: 0,
    benchpress: 0,
    military: 0
  };

  componentDidMount() {
    this.setState({
      deadlift: this.props.measurement.dl,
      squat: this.props.measurement.sqt,
      benchpress: this.props.measurement.bp,
      military: this.props.measurement.mp
    });
  }

  handleInput = (event, type) => {
    let stateVal = type;
    let numVal = parseInt(event.value);
    isNaN(numVal)
      ? this.setState({ [stateVal]: "" })
      : this.setState({
          [stateVal]: numVal
        });
  };

  newMax = type => {
    let newMaxVal = this.state[type];
    if (newMaxVal === 0 || typeof newMaxVal === "string") {
      return "Waiting on input";
    }
    return newMaxVal.toFixed(2);
  };

  submitMaxes = () => {
    var data = {
      ...this.state,
      ...this.props.user
    };
    console.log(data);
    this.props.newMax(data, () => {
      console.log(this.props);
    });
  };

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="update-lifts">
        <h3 className="update__header">Update Maxes</h3>
        <p className="update__main">
          WARNING: We recommend you do not update these after your initial
          entry. By following the programs they will automatically update based
          on your lifts.
        </p>
        <form className="input-form">
          <div>
            <label className="squat-label">Squat</label>
          </div>
          <div className="squat-inputs">
            <input
              type="text"
              onChange={e => this.handleInput(e.target, "squat")}
              value={this.state.squat}
              placeholder="Squat"
            />
          </div>
          <div>
            <label className="benchpress-label">Benchpress</label>
          </div>
          <div className="benchpress-inputs">
            <input
              type="text"
              onChange={e => this.handleInput(e.target, "benchpress")}
              value={this.state.benchpress}
              placeholder="Benchpress"
            />
          </div>
          <div>
            <label className="deadlift-label">Deadlift</label>
          </div>
          <div className="deadlift-inputs">
            <input
              type="text"
              onChange={e => this.handleInput(e.target, "deadlift")}
              value={this.state.deadlift}
              placeholder="Deadlift"
            />
          </div>
          <div>
            <label className="military-label">Military Press</label>
          </div>
          <div className="military-inputs">
            <input
              type="text"
              onChange={e => this.handleInput(e.target, "military")}
              value={this.state.military}
              placeholder="Military Press"
            />
          </div>
        </form>
        <button className="update-max" onClick={this.submitMaxes}>
          Submit
        </button>
      </div>
    );
  }
}

export default UpdateMax;
