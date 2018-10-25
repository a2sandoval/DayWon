import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
// import * as actions from '../actions';

class MaxChart extends Component {
  render() {
    return (
      <div className="max">
        <h3 className="maxChart">BenchPress</h3>
        <h4 className="benchMax">
          Max:
          {this.props.measurement.bp} Training Max:
          {this.props.program.trnMaxCalc(this.props.measurement.bp)}
        </h4>
        <h3 className="maxChart">Squat</h3>
        <h4 className="squatMax">
          Max:
          {this.props.measurement.sqt} Training Max:
          {this.props.program.trnMaxCalc(this.props.measurement.sqt)}
        </h4>
        <h3 className="maxChart">Deadlift</h3>
        <h4 className="deadliftMax">
          Max:
          {this.props.measurement.dl} Training Max:
          {this.props.program.trnMaxCalc(this.props.measurement.dl)}
        </h4>
        <h3 className="maxChart">Military Press</h3>
        <h4 className="militaryMax">
          Max:
          {this.props.measurement.mp} Training Max:
          {this.props.program.trnMaxCalc(this.props.measurement.mp)}
        </h4>
      </div>
    );
  }
}

function mapStateToProps({ measurement, program }) {
  return { measurement, program };
}

export default connect(mapStateToProps)(MaxChart);
