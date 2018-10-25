import React, { Component } from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  MenuItem,
  Paper,
  Modal
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { connect } from "react-redux";
import * as actions from "../../actions";
import program from "../../utils/allProgramData";
import PrimaryForm from "./tables/PrimaryForm";
import DailyViewLayout from "./tables/DailyViewLayout";
import AccesForm from "./tables/AccesForm";
import calcs from "../../utils/calcs";

class DailyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutDay: null,
      programDay: {},
      open: false,
      keyCount: 0,
      currentSet: "",
      upcomingSet: "",
      previousSet: []
    };
  }

  liftType = undefined;
  userDay = this.props.workoutDay;
  maxForMeasurement = "bp";

  // immidiately called on render with workout day
  showWorkouts = workoutDay => {
    if (
      this.state.workoutDay === null ||
      this.props.workoutDay === this.state.workoutDay
    ) {
      // if props.workoutDay is the same as state.workoutDay
      return this.programWorkout(this.props.settings.program, workoutDay);
    } else if (
      this.state.workoutDay > this.props.workoutDay ||
      this.state.workoutDay < this.props.workoutDay
    ) {
      return this.programWorkout(
        this.props.settings.program,
        this.state.workoutDay
      );
    }
  };

  programWorkout = (programName, workoutDay) => {
    let day = workoutDay - 1;
    let programDay = program[programName].programWorkouts[day];
    let userMaxQuery = calcs.userCurrentMax(programDay.day);
    let userMax = this.props.measurement[userMaxQuery];
    return this.formLayout(programDay, userMax);
  };

  day = () => {
    if (!this.state.workoutDay) {
      return this.props.workoutDay;
    } else {
      return this.state.workoutDay;
    }
  };

  formLayout = (programDay, userMax) => {
    let primaryForm = () => {
      return programDay.primaryWorkouts.reps.map((set, i) => {
        let increment = i + 1;
        let key = programDay.primaryWorkouts.lift + "_" + increment + "_weight";
        let repInput =
          programDay.primaryWorkouts.lift + "_" + increment + "_reps";
        let row = `${programDay.primaryWorkouts.lift}_set${increment}_row`;
        console.log(this.props);
        let weightCalc = calcs.totalWeight(
          programDay.primaryWorkouts.weightPerc[i],
          userMax,
          this.props.settings.weightCapacity
        );
        if (programDay === this.state.programDay) {
        } else {
          this.setState({
            [key]: weightCalc,
            [repInput]: set
          });
        }
        return (
          <PrimaryForm
            idToStateReps={repInput}
            idToStateWeight={key}
            updateVal={this.updateVal}
            inputRepVal={this.state[repInput]}
            inputWeightVal={this.state[key]}
            weightPerc={programDay.primaryWorkouts.weightPerc[i]}
            reps={set}
            set={increment}
            row={row}
            nextSet={this.nextSet}
            currentSet={this.state.currentSet}
            previousSet={this.state.previousSet}
            setRowAsCurrent={this.setRowAsCurrent}
          />
        );
      });
    };

    let accessForm = () => {
      return programDay.accesWorkouts.map((workout, i) => {
        return (
          <div className="access" id="lift">
            <h5>{workout.lift}</h5>
            <table className="acces-tables ui celled table">
              <thead>
                <tr>
                  <th className="short-width">Set</th>
                  <th>Reps</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>{populateAccessForm(i)}</tbody>
            </table>
          </div>
        );
      });
    };

    let populateAccessForm = i => {
      return programDay.accesWorkouts[i].reps.map((set, i) => {
        let key = i + 1;
        let weightInput =
          programDay.accesWorkouts[i].lift + "_" + key + "_weight";
        let repInput = programDay.accesWorkouts[i].lift + "_" + key + "_reps";
        if (programDay === this.state.programDay) {
        } else {
          this.setState({
            programDay: programDay,
            [weightInput]: "",
            [repInput]: set
          });
        }
        return (
          <AccesForm
            set={key}
            reps={set}
            idToStateReps={repInput}
            idToStateWeight={key}
            updateVal={this.updateVal}
            inputRepVal={this.state[repInput]}
            inputWeightVal={this.state[key]}
            nextSet={this.nextSet}
            currentSet={this.state.currentSet}
            previousSet={this.state.previousSet}
          />
        );
      });
    };

    return (
      <DailyViewLayout
        week={programDay.week}
        wave={programDay.wave}
        day={programDay.workout}
        programDay={programDay.programDay}
        primaryForm={primaryForm}
        accessForm={accessForm}
        submitWorkout={this.submitWorkout}
      />
    );
  };

  updateVal = e => {
    this.setState({
      [e.id]: e.value
    });
  };

  updateDay = calc => {
    if (calc === "minus") {
      this.userDay--;
    } else if (calc === "plus") {
      this.userDay++;
    }
    this.setState({
      workoutDay: this.userDay
    });
    console.log(this.state);
    return this.userDay;
  };

  workoutRender = open => {
    if (!open) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  setRowAsCurrent = row => {
    this.setState({
      currentSet: row
    });
    console.log(this.state.currentSet);
  };

  nextSet = val => {
    if (!this.state.previousSet) {
      this.setState({
        previousSet: [val],
        currentSet: ""
      });
    } else {
      let newState = [...this.state.previousSet, val];
      this.setState({
        previousSet: newState,
        currentSet: ""
      });
    }
    console.log(this.state.previousState);
  };

  submitWorkout = () => {
    console.log("workout submitted");
  };

  handleSubmit = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="Daily">
        <button onClick={() => this.workoutRender("open")}>
          Start Workout
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.workoutRender}
        >
          <div className="workout-modal" />
        </Modal>
        <button onClick={() => this.updateDay("minus")}>last workout</button>
        <button onClick={() => this.updateDay("plus")}>next workout </button>
        {this.showWorkouts(this.props.workoutDay)}
      </div>
    );
  }
}

function mapStateToProps({
  workoutDay,
  userMaxes,
  powerliftDay,
  measurement,
  settings
}) {
  return {
    workoutDay,
    userMaxes,
    powerliftDay,
    measurement,
    settings
  };
}

export default connect(
  mapStateToProps,
  actions
)(DailyView);
