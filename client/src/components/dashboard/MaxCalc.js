import React, { Component } from "react";

class MaxCalc extends Component {
  state = {
    weightValue: 0,
    repsValue: 0
  };

  handleWeightInput = event => {
    console.log(event.value);
    let numVal = parseInt(event.value);
    this.setState({
      weightValue: numVal
    });
  };

  handleRepsInput = event => {
    let numVal = parseInt(event.value);
    this.setState({
      repsValue: numVal
    });
  };

  newMax = () => {
    let newMaxVal =
      this.state.weightValue * this.state.repsValue * 0.033 +
      this.state.weightValue;
    if (newMaxVal === 0) {
      return "Enter Max";
    }
    return newMaxVal.toFixed(2);
  };

  render() {
    return (
      <div>
        <h3>Calculated Max: {this.state.max}</h3>
        <form>
          <h4>Weight</h4>
          <input
            type="text"
            onChange={e => this.handleWeightInput(e.target)}
            value={this.state.weightValue}
            placeholder="Weight"
          />
          <h4>Reps</h4>
          <input
            type="text"
            onChange={e => this.handleRepsInput(e.target)}
            value={this.state.repsValue}
            placeholder="Reps"
          />
        </form>
        <div>New Max {this.newMax()}</div>
      </div>
    );
  }
}

export default MaxCalc;

// Graph, Auth working, react native, graphql, input data, css site
