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
import ModalWorkout from "./ModalWorkout";
import "../style/Daily.css";

class DailyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutDay: null,
      programDay: {},
      open: false,
      keyCount: 0,
      previousSet: [],
      currentSet: "",
      liftingData: {
        Squat: {},
        Benchpress: {},
        "Military Press": {},
        Deadlift: {}
      }
    };
  }

  liftType = undefined;
  userDay = this.props.workoutDay;
  maxForMeasurement = "bp";
  workoutData = {};
  rowIsCurrent = "";

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
        let lift = programDay.primaryWorkouts.lift;
        let repInput =
          programDay.primaryWorkouts.lift + "_" + increment + "_reps";
        let row = `${programDay.primaryWorkouts.lift}_set${increment}_row`;
        // console.log(this.state);
        let weightCalc = calcs.totalWeight(
          programDay.primaryWorkouts.weightPerc[i],
          userMax,
          this.props.settings.weightCapacity
        );
        if (programDay === this.state.programDay) {
        } else {
          let newState = (key, repInput, set, lift, increment, weightCalc) => {
            if (this.state.liftingData[lift][increment]) {
              return;
            }
            let workoutData = {
              ...this.state.liftingData,
              [lift]: {
                ...this.state.liftingData[lift],
                [increment]: {
                  ...this.state.liftingData[lift][increment],
                  reps: set,
                  weight: weightCalc
                }
              }
            };
            this.workoutData = workoutData;
            // console.log(this.workoutData);
            return this.setState(
              {
                liftingData: workoutData,
                [key]: weightCalc,
                [repInput]: set,
                programDay
              },
              () => {
                console.log(this.state.liftingData);
                newState(key, repInput, set, lift, increment, weightCalc);
              }
            );
          };
          newState(key, repInput, set, lift, increment, weightCalc);
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
            workoutDay={lift}
            liftingData={this.state.liftingData}
            nextSet={this.nextSet}
            currentSet={this.state.currentSet}
            previousSet={this.state.previousSet}
            setRowAsCurrent={this.setRowAsCurrent}
            rowIsCurrent={this.rowIsCurrent}
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

    // inputRepVal2={this.state.liftingData[lift][increment]["reps"]}
    // inputWeightVal2={this.state.liftingData[lift][increment]["weight"]}

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

  updateVal = (e, increment, workout, type) => {
    console.log(this.state.liftingData);
    let updateInputData = { ...this.state.liftingData };
    updateInputData[workout][increment][type] = e.value;
    this.workoutData = updateInputData;
    console.log(this.workoutData);
    this.setState(
      {
        [type]: e.value,
        liftingData: this.workoutData
      },
      () => {
        console.log(this.state.liftingData);
      }
    );
    console.log(this.state.liftingData);
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
    console.log("button clicked");
    open ? this.setState({ open: true }) : this.setState({ open: false });
  };

  setRowAsCurrent = (row, cb) => {
    this.setState(
      prevState => {
        console.log(prevState.currentSet);
        if (!prevState.currentSet && !this.state.previousSet.includes(row)) {
          return { currentSet: row };
        } else {
          return;
        }
      },
      () => console.log(this.state.currentSet)
    );
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

  submitWorkout = e => {
    let program = this.state.programDay;
    let programDayLift = this.state.programDay.day;
    //TODO: Change obj to have weight and reps + array (or I could look at key length)

    let last = Object.keys(this.state.liftingData[programDayLift]).length - 1;
    console.log(last);
    let weight = this.state.liftingData[programDayLift][last][weight];
    let reps = this.state.liftingData[programDayLift][last][reps];
    let { wave } = program.wave;
    let repsLeft = reps - wave;
    let addToTrainingMax = 0;
    if (repsLeft > 0 && program.phase === "Realization") {
      if (programDayLift === "Squat" || programDayLift === "Deadlift") {
        addToTrainingMax = repsLeft * 2.5;
      } else if (
        programDayLift === "Benchpress" ||
        programDayLift === "Military Press"
      ) {
        addToTrainingMax = repsLeft * 1.25;
      }
    }
    let userMaxQuery = calcs.userCurrentMax(programDayLift);
    let userMax = this.props.measurement[userMaxQuery] + addToTrainingMax;
    let workoutSubmit = {
      workoutDay: programDayLift,
      maxForWorkout: userMax,
      ...this.state.liftingData
    };
    this.props.submitWorkout(workoutSubmit);
  };

  handleSubmit = e => {
    console.log(e);
  };

  componentDidUpdate() {}

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
          <div className="workout-modal">
            <ModalWorkout />
          </div>
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
