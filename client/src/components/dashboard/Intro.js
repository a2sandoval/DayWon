import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
// import * as actions from '../actions';
import calcs from "../../utils/calcs";
import { Modal } from "@material-ui/core";
import MaxCalc from "./MaxCalc";
import ModalWorkout from "../workouts/ModalWorkout";

class Intro extends Component {
  state = {
    openCalc: false,
    openWorkout: false
  };

  startMaxCalcModal = () => {
    console.log("start calc");
    this.workoutRender("Calc", "open");
  };

  workoutRender = (type, open) => {
    let openType = "open" + type;
    open
      ? this.setState({ [openType]: true })
      : this.setState({ [openType]: false });
  };

  startWorkoutModal = () => {
    console.log("start Workout");
    this.workoutRender("Workout", "open");
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
          <div className="buttons">
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
        <Modal
          className="col s6 offset-s3 max-calc"
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openCalc}
          onClose={() => this.workoutRender("Calc")}
        >
          <div className="calc-modal">
            <MaxCalc />
          </div>
        </Modal>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openWorkout}
          onClose={() => this.workoutRender("Workout")}
        >
          <div className="workout-modal">
            <ModalWorkout />
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ measurement }) {
  return { measurement };
}

export default connect(mapStateToProps)(Intro);
