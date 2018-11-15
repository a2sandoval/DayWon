import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import calcs from "../../utils/calcs";
import { Modal } from "@material-ui/core";
import UpdateMax from "./UpdateMax";
import MaxCalc from "./MaxCalc";
import ModalWorkout from "../workouts/ModalWorkout";

class Intro extends Component {
  state = {
    openCalc: false,
    openWorkout: false,
    openMaxUpdate: false
  };

  workoutRender = (type, open) => {
    let openType = "open" + type;
    open
      ? this.setState({ [openType]: true })
      : this.setState({ [openType]: false });
  };

  startModal = type => {
    this.workoutRender(type, "open");
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
              onClick={() => this.startModal("Workout")}
              className="waves-effect waves-light btn"
            >
              Start Today's Workout
            </button>
            <button
              onClick={() => this.startModal("Calc")}
              className="waves-effect waves-light btn"
            >
              {" "}
              View Max Calculator{" "}
            </button>
            <button
              onClick={() => this.startModal("MaxUpdate")}
              className="waves-effect waves-light btn"
            >
              {" "}
              Update Your Max
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openMaxUpdate}
          onClose={() => this.workoutRender("MaxUpdate")}
        >
          <div className="maxUpdate-modal">
            <UpdateMax
              newMax={this.props.newMax}
              measurement={this.props.measurement}
              user={this.props.user}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ measurement, user }) {
  return { measurement, user };
}

export default connect(
  mapStateToProps,
  actions
)(Intro);
