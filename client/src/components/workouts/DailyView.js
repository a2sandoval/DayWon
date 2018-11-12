import React, { Component } from "react";
import update from "react-addons-update"; // ES6
// import PureRenderMixin from "react-addons-pure-render-mixin"; // ES6
import { Modal } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../actions";
import program from "../../utils/allProgramData";
import DailyViewLayout from "./tables/DailyViewLayout";
import calcs from "../../utils/calcs";
import ModalWorkout from "./ModalWorkout";
import Timer from "./Timer";
import "../style/Daily.css";

class DailyView extends Component {
  state = {
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
    },
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
    let primaryForm = programDay => {
      return programDay.primaryWorkouts.reps.map((set, i) => {
        let increment = i + 1;
        let lift = programDay.primaryWorkouts.lift;
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
            console.log(this.state.liftingData);
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
          let weight = "Log weight for later reference";
          let weightPerc = "User determined";
          this.setState(state => {
            console.log(state);
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

  updateVal = (e, increment, workout, type, acces, id) => {
    console.log(this.state.liftingData);
    console.log(this.state);
    let updateInputData = {};
    if (acces) {
      let accesDataArrIndex = this.state.accesData.findIndex(val => {
        if (val.id === id) {
          return val;
        }
        console.log(accesDataArrIndex);
      });
      this.setState(state => ({
        [acces]: e.target.value,
        liftingData: { ...state.liftingData },
        accesData: update(this.state.accesData, {
          [accesDataArrIndex]: { [type]: { $set: [e.target.value] } }
        })
      }));
    } else {
      updateInputData = { ...this.state.liftingData };
      updateInputData[workout][increment][type] = e.value;
      this.workoutData = updateInputData;
      console.log(this.workoutData);
      this.setState({
        [type]: e.value,
        liftingData: this.workoutData
      });
    }
  };

  updateDay = calc => {
    if (calc === "minus") {
      this.userDay--;
      this.workoutDay = this.userDay;
    } else if (calc === "plus") {
      this.userDay++;
      this.workoutDay = this.userDay;
    }
    this.setState(
      {
        workoutDay: this.userDay
      },
      () => this.showWorkouts(this.props.workoutDay)
    );
    return this.userDay;
  };

  workoutRender = open => {
    console.log("button clicked");
    if (open) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
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
    console.log(this.state.previousState);
  };

  submitWorkout = e => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e);
    console.log(e.target);
    let program = this.state.programDay;
    let programDayLift = this.state.programDay.day;
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
      ...this.state.liftingData,
      ...this.props.user
    };
    this.props.submitWorkout(workoutSubmit);
  };

  updated = () => {
    this.setState({
      nextWorkoutTime: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  componentWillMount() {
    {
      this.showWorkouts(this.props.workoutDay);
    }
  }

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
          onClose={() => this.workoutRender()}
        >
          <div className="workout-modal">
            <ModalWorkout />
          </div>
        </Modal>
        <button onClick={() => this.updateDay("minus")}>last workout</button>
        <button onClick={() => this.updateDay("plus")}>next workout </button>
        <Timer update={this.state.nextWorkoutTime} updated={this.updated} />
        <DailyViewLayout
          handleSubmit={this.handleSubmit}
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
        />
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
)(DailyView);
