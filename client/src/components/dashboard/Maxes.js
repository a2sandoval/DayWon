import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
// import * as actions from '../actions';
import calcs from "../../utils/calcs";

class MaxChart extends Component {
  startMaxCalcModal = () => {
    console.log("startModal");
  };

  startWorkoutModal = () => {
    console.log("startModal");
  };

  render() {
    return (
      <div className="col s9 m6">
        <div className="card">
          <div className="card-image">
            <img src="http://www.crossfitnorthfulton.com/wp-content/uploads/2012/11/crossfitnorthfulton-216.jpg" />
            <span class="card-title">DayWon</span>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>
                It takes time to load up heavy weight onto the bar. For those
                without the right program they'll never get there. We're going
                to get you on track but it will come down to you. Your
                dedication, max effort, and patience will determine your success
                or downfall. Learn the proper mechanics and enjoy these
                programs... they're done by the best.
              </p>
              <br />
              <p>User Maxes:</p>
              <div className="row">
                <div className="col s3">
                  <p>Benchpress </p>

                  <p>
                    <MaxCalc type="bp" measurement={this.props.measurement} />
                  </p>
                </div>
                <div className="col s3">
                  <p>Squat </p>

                  <p>
                    <MaxCalc type="sqt" measurement={this.props.measurement} />
                  </p>
                </div>
                <div className="col s3">
                  <p>Deadlift </p>

                  <p>
                    <MaxCalc type="dl" measurement={this.props.measurement} />
                  </p>
                </div>
                <div className="col s3">
                  <p>Overhead Press </p>

                  <p>
                    <MaxCalc type="mp" measurement={this.props.measurement} />
                  </p>
                </div>
              </div>
            </div>
            <div class="card-action click">
              <button
                onClick={() => this.startWorkoutModal()}
                className="waves-effect waves-light btn"
              >
                Start Today's Workout
              </button>
              <button
                onClick={() => this.startMaxCalcModal()}
                className="waves-effect waves-light btn"
              >
                Update Your Max with our Max Calculator
              </button>
            </div>
          </div>
        </div>
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
