import React, { Component } from "react";
import update from "react-addons-update"; // ES6
// import PureRenderMixin from "react-addons-pure-render-mixin"; // ES6
import { Modal } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import program from "../../utils/allProgramData";
import DailyViewLayout from "./tables/DailyViewLayout";
import calcs from "../../utils/calcs";
import Timer from "./Timer";
import "../style/Daily.css";

class ModalWorkout extends Component {
  state = {
    workoutDay: null,
    programDay: {},
    keyCount: 0,
    previousSet: [],
    currentSet: "",
    liftingData: {},
    workouts: [],
    accesData: {},
    runThrough: 0,
    nextWorkoutTime: false
  };

  liftType = undefined;
  userDay = this.props.workoutDay;
  maxForMeasurement = "bp";
  workoutData = {};
  rowIsCurrent = "";
  runThrough = 0;
  num;
  // immidiately called on render with workout day
  showWorkouts = workoutDay => {
    if (
      this.state.workoutDay === null ||
      this.props.workoutDay === this.state.workoutDay
    ) {
      // if props.workoutDay is the same as state.workoutDay
      return this.programWorkout(
        this.props.settings.program,
        this.props.workoutDay
      );
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
    !this.state.programDay ? this.setState({ programDay }) : true;
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

  handleSubmit = e => {
    console.log(e);
  };

  formLayout = (programDay, userMax) => {
    let lift = programDay.primaryWorkouts.lift;
    this.setState(state => ({
      liftingData: { ...state.liftingData, [lift]: {} }
    }));
    let primaryForm = programDay => {
      return programDay.primaryWorkouts.reps.map((set, i) => {
        let increment = i + 1;
        let weightPerc = programDay.primaryWorkouts.weightPerc[i];
        let weightCalc = calcs.totalWeight(
          programDay.primaryWorkouts.weightPerc[i],
          userMax,
          this.props.settings.weightCapacity
        );
        return this.setState(
          (state, props) => {
            return {
              programDay,
              liftingData: {
                ...state.liftingData,
                [lift]: {
                  ...state.liftingData[lift],
                  [increment]: {
                    ...state.liftingData[lift][increment],
                    reps: set,
                    weight: weightCalc,
                    weightPerc
                  }
                }
              }
            };
          },
          () => {
            // console.log(this.state.liftingData);
          }
        );
      });
    };

    let accessForm = programDay => {
      return programDay.accesWorkouts.map((workout, i) => {
        let lift = programDay.accesWorkouts[i].lift;
        if (!this.state.liftingData[lift]) {
          this.setState(state => ({
            liftingData: { ...state.liftingData, [lift]: {} }
          }));
        }
        return programDay.accesWorkouts[i].reps.map((set, j) => {
          let increment = j + 1;
          let weight = "To Failure";
          let weightPerc = "User determined";
          this.setState(state => {
            // console.log(state);
            if (state.runThrough === 25) {
              return null;
            }
            return {
              liftingData: {
                ...state.liftingData,
                [lift]: {
                  ...state.liftingData[lift],
                  [increment]: {
                    ...state.liftingData[lift][increment],
                    reps: set,
                    weight: weight,
                    weightPerc
                  }
                }
              }
            };
          });
        });
      });
    };
    primaryForm(programDay);
    accessForm(programDay);
  };

  updateVal = (e, increment, workout, type) => {
    // console.log(this.state.liftingData);
    // console.log(this.state);
    let updateInputData = {};
    updateInputData = { ...this.state.liftingData };
    updateInputData[workout][increment][type] = e.target.value;
    this.setState({
      liftingData: updateInputData
    });
  };

  updateDay = calc => {
    if (calc === "minus" && this.userDay >= 2) {
      this.userDay--;
    } else if (
      calc === "plus" &&
      this.userDay <
        program[this.props.settings.program].programWorkouts.length - 1
    ) {
      this.userDay++;
    } else if (calc === "minus" || calc === "plus") {
      return;
    } else {
      this.userDay = this.props.workoutDay;
    }
    this.workoutDay = this.userDay;
    this.setState(
      {
        workoutDay: this.userDay
      },
      () => this.showWorkouts(this.props.workoutDay)
    );
    return this.userDay;
  };

  setRowAsCurrent = (row, cb) => {
    this.setState(
      prevState => {
        // console.log(prevState.currentSet);
        if (!prevState.currentSet && !this.state.previousSet.includes(row)) {
          return { currentSet: row };
        } else {
          return;
        }
      },
      () => console.log(this.state.currentSet)
    );
  };

  nextSet = (e, val) => {
    e.preventDefault();
    if (!this.state.previousSet) {
      this.setState({
        previousSet: [val],
        currentSet: "",
        nextWorkoutTime: true
      });
    } else {
      let newState = [...this.state.previousSet, val];
      this.setState({
        previousSet: newState,
        currentSet: "",
        nextWorkoutTime: true
      });
    }
    // console.log(this.state.previousState);
  };

  submitWorkout = e => {
    e.preventDefault();
    let program = this.state.programDay;
    let programDayLift = this.state.programDay.day;
    let last = Object.keys(this.state.liftingData[programDayLift]).length - 1;
    // console.log(last);
    let weight = this.state.liftingData[programDayLift][last][weight];
    let reps = this.state.liftingData[programDayLift][last][reps];
    let { wave } = program.wave;
    let repsLeft = reps - wave;
    let addToTrainingMax = 0;
    // Updates the USER Max to DB
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
      workoutEntered: this.state.liftingData,
      user: this.props.user,
      maxes: this.props.measurement
    };
    console.log(workoutSubmit);
    //TODO: Make action for sending to DB
    this.props.submitWorkout(workoutSubmit);
  };

  updated = () => {
    this.setState({
      nextWorkoutTime: false
    });
  };

  componentWillMount() {
    {
      this.showWorkouts(this.props.workoutDay);
    }
  }

  render() {
    return (
      <div className="workout-modal">
        <div className="daily">
          <div className="diffWorkout">
            Choose Different Workout:
            <div className="change-day-buttons">
              <button onClick={() => this.updateDay("minus")}>
                Last Workout
              </button>
              <button onClick={() => this.updateDay("today")}>Today</button>
              <button onClick={() => this.updateDay("plus")}>
                Next Workout{" "}
              </button>
            </div>
          </div>
          <div className="timer">
            <Timer update={this.state.nextWorkoutTime} updated={this.updated} />
          </div>
          <DailyViewLayout
            submitWorkout={this.submitWorkout}
            week={this.state.programDay.week}
            wave={this.state.programDay.wave}
            day={this.state.programDay.workout}
            programDay={this.state.programDay}
            submitWorkout={this.submitWorkout}
            liftingData={this.state.liftingData}
            nextSet={this.nextSet}
            currentSet={this.state.currentSet}
            previousSet={this.state.previousSet}
            setRowAsCurrent={this.setRowAsCurrent}
            rowIsCurrent={this.rowIsCurrent}
            updateVal={this.updateVal}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({
  workoutDay,
  userMaxes,
  powerliftDay,
  measurement,
  settings,
  user
}) {
  return {
    workoutDay,
    userMaxes,
    powerliftDay,
    measurement,
    settings,
    user
  };
}

export default connect(
  mapStateToProps,
  actions
)(ModalWorkout);
