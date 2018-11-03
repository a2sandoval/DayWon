import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
// import * as actions from '../actions';
import calcs from "../../utils/calcs";
import { Modal } from "@material-ui/core";
import MaxCalc from "./MaxCalc";
import ModalWorkout from "../workouts/ModalWorkout";

class MaxChart extends Component {
  state = {
    open: false
  };

  startMaxCalcModal = () => {
    console.log("startModal");
    this.workoutRender("open");
  };

  workoutRender = open => {
    console.log("button clicked");
    open ? this.setState({ open: true }) : this.setState({ open: false });
  };

  startWorkoutModal = () => {
    console.log("startModal");
  };

  render() {
    console.log(this.state);
    return (
      <div className="col s12">
        <div className="intro s8">
          Program - Program Name
          <div className="intro-par">
            <p>
              It takes time to load up heavy weight onto the bar. For those
              without the right program they'll never get there. We're going to
              get you on track but it will come down to you. Your dedication,
              max effort, and patience will determine your success or downfall.
              Learn the proper mechanics and enjoy these programs... they're
              done by the best.
            </p>
            <p>
              Juggernaut paragraph Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Dolorum nobis dolor ab iusto nesciunt? Quos
              molestiae aut voluptatum quisquam perspiciatis temporibus quae
              placeat nemo ad, delectus totam pariatur cupiditate eos possimus
              libero, exercitationem dolorem ab ipsa debitis officia voluptates?
              Quod.
            </p>
          </div>
          <div className="stats">
            <div className="totals">
              <div className="title">History</div>
              <div className="lists">
                Days logged: <br />
                Total Sets: <br />
                Total Volume: <br />
                Avg Daily Volume:
              </div>
            </div>
            <div>
              {/* Moving this all to the pi chart */}
              <div className="title">Maxes</div>
              <div className="lists row">
                <div className="col s3">
                  <p>Benchpress </p>

                  <p>
                    <MaxRender type="bp" measurement={this.props.measurement} />
                  </p>
                </div>
                <div className="col s3">
                  <p>Squat </p>

                  <p>
                    <MaxRender
                      type="sqt"
                      measurement={this.props.measurement}
                    />
                  </p>
                </div>
                <div className="col s3">
                  <p>Deadlift </p>

                  <p>
                    <MaxRender type="dl" measurement={this.props.measurement} />
                  </p>
                </div>
                <div className="col s3">
                  <p>Overhead Press </p>

                  <p>
                    <MaxRender type="mp" measurement={this.props.measurement} />
                  </p>
                </div>
              </div>
            </div>
            <div class="buttons">
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
        <Modal
          className="col s6 offset-s3 max-calc"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => this.workoutRender()}
        >
          <div className="workout-modal">
            <MaxCalc />
          </div>
        </Modal>
      </div>
    );
  }
}

function MaxRender({ type, measurement }) {
  let max = measurement[type];
  return (
    <div>
      Max: {max} <br />
      Training Max: {calcs.trnMaxCalc(max)}
    </div>
  );
}

function mapStateToProps({ measurement }) {
  return { measurement };
}

export default connect(mapStateToProps)(MaxChart);
