import React, { Component } from "react";
// import react form
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import calcs from "../../utils/calcs";
import { Modal } from "@material-ui/core";
import UpdateMax from "./UpdateMax";
import MaxCalc from "./MaxCalc";
import ModalWorkout from "../workouts/ModalWorkout";
import Videos from "./Video/Videos";

class Intro extends Component {
  state = {
    openCalc: false,
    openWorkout: false,
    openMaxUpdate: false,
    openHowToVideos: false
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
          Welcome to <b>DayWon</b> - a simple approach to powerlifting. To get
          started use the tools below to set your current lifting maxes. If
          you're unsure what those are use the calculator to help.
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
              <b>The Juggernaut Program</b> offers accessible approach, rooted
              in proven performance enhancement strategies, Chad's Juggernaut
              Method 2.0 is a truly complete training program. Not often will
              you find a product that covers all the training demands an athlete
              needs to excel at his or her given sport, and organizes them in a
              logical and productive fashion. Best of all, Chad has made the
              program adaptable to athletes of any sport, at any level. If you
              want to take your training, or your team's training to the next
              level I highly recommend you check this out!
            </p>
          </div>
          <div className="intro-buttons">
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
            <button
              onClick={() => this.startModal("HowToVideos")}
              className="waves-effect waves-light btn"
            >
              {" "}
              How To Videos
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
            <ModalWorkout workoutRender={this.workoutRender} />
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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openHowToVideos}
          onClose={() => this.workoutRender("HowToVideos")}
        >
          <div className="videos-modal">
            <Videos />
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
