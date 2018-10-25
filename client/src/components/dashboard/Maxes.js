import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
// import * as actions from '../actions';
import calcs from "../../utils/calcs";

class MaxChart extends Component {
  render() {
    return (
      <div className="max">
        <h3 className="maxChart">BenchPress</h3>
        <h4 className="benchMax">
          <MaxCalc type="bp" measurement={this.props.measurement} />
        </h4>
        <h3 className="maxChart">Squat</h3>
        <h4 className="squatMax">
          <MaxCalc type="sqt" measurement={this.props.measurement} />
        </h4>
        <h3 className="maxChart">Deadlift</h3>
        <h4 className="deadliftMax">
          <MaxCalc type="dl" measurement={this.props.measurement} />
        </h4>
        <h3 className="maxChart">Military Press</h3>
        <h4 className="militaryMax">
          <MaxCalc type="mp" measurement={this.props.measurement} />
        </h4>
      </div>
    );
  }
}

function MaxCalc({ type, measurement }) {
  let max = measurement[type];
  return (
    <div>
      Max: {max} Training Max: {calcs.trnMaxCalc(max)}
    </div>
  );
}

function mapStateToProps({ measurement }) {
  return { measurement };
}

export default connect(mapStateToProps)(MaxChart);
