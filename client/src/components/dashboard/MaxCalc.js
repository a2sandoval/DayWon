import React, { Component } from "react";
import { string } from "prop-types";

class MaxCalc extends Component {
  state = {
    weightValue: 0,
    repsValue: 0
  };

  handleInput = (event, type) => {
    let stateVal = type + "Value";
    let numVal = parseInt(event.value);
    // let typeIsNaN = typeof numVal;
    // console.log(typeIsNaN);
    // numVal === NaN
    isNaN(numVal)
      ? this.setState({ [stateVal]: "" })
      : this.setState({
          [stateVal]: numVal
        });
  };

  newMax = () => {
    let newMaxVal =
      this.state.weightValue * this.state.repsValue * 0.033 +
      this.state.weightValue;
    if (newMaxVal === 0 || typeof newMaxVal === "string") {
      return "Waiting on input";
    }
    return newMaxVal.toFixed(2);
  };

  render() {
    return (
      <div className="calc">
        <h3 className="calc__header">Max Calculator</h3>
        <p className="calc__main">
          Enter in the number of reps and weight to generate your max estimate
        </p>
        <form className="input-form">
          <div>
            <label className="weight-label">Weight</label>
          </div>
          <div className="max-calc-weight-inputs">
            <input
              type="text"
              onChange={e => this.handleInput(e.target, "weight")}
              value={this.state.weightValue}
              placeholder="Weight"
            />
          </div>
          <div>
            <label className="reps-label">Reps</label>
          </div>
          <div>
            {" "}
            <input
              type="text"
              onChange={e => this.handleInput(e.target, "reps")}
              value={this.state.repsValue}
              placeholder="Reps"
              className="max-calc-reps-inputs"
            />
          </div>
        </form>
        <div className="new-max">{this.newMax()}</div>
      </div>
    );
  }
}

export default MaxCalc;

// Graph, Auth working, react native, graphql, input data, css site
