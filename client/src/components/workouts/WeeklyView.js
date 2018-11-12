import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import calcs from "../../utils/calcs";
import program from "../../utils/allProgramData";
import WeeklyFormPrimary from "./tables/WeeklyFormPrim";
import WeeklyFormAccess from "./tables/WeeklyFormAcc";
import "../style/Weekly.css";

class WeeklyView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      day: this.props.workoutDay,
      nextDay: this.props.workoutDay + 1,
      twoDays: this.props.workoutDay + 2,
      threeDays: this.props.workoutDay + 3
    };
  }

  liftType = undefined;
  maxForMeasurement = "bp";
  todaysWorkout = null;
  nextDayWorkouts = null;
  twoDaysWorkouts = null;
  threeDaysWorkouts = null;
  programDaySearch = program[this.props.settings.program].programWorkouts;

  getWorkout = (dayEntered, dayReturned) => {
    let dayIndexed = dayEntered - 1;
    this[dayReturned] = this.programDaySearch[dayIndexed];
    return this[dayReturned];
  };

  populateMain = (dayEntered, type) => {
    let list = [];
    let sameCheck = [];
    let same = false;
    let set = [];
    let userMaxFetch = calcs.userCurrentMax(this[dayEntered].day);
    if (type === "weight") {
      this[dayEntered].primaryWorkouts.weightPerc.map((val, i) => {
        let key = i;
        let valToPush = calcs.totalWeight(
          val,
          this.props.measurement[userMaxFetch],
          this.props.settings.weightCapacity
        );
        list.push(valToPush);
      });
    } else if (type === "weightPerc") {
      let weightPercArray = [];
      calcs.weightPerc(
        this[dayEntered].primaryWorkouts.weightPerc.map((val, i) => {
          let key = i;
          let percFromDec = val * 100;
          weightPercArray.push(percFromDec);
        })
      );
      if (weightPercArray.every(val => val === weightPercArray[0]) === true) {
        return weightPercArray[0];
      } else {
        return weightPercArray.join("/");
      }
    } else {
      this[dayEntered].primaryWorkouts.reps.map((val, i) => {
        let key = i + 1;
        list.push(val);
        set.push(key);
      });
    }
    if (list.every(val => val === list[0]) === true) {
      same = true;
    }
    if (same === true && type === "set") {
      var setDash = set[0] + "-" + set[set.length - 1];
      return setDash;
    } else if (same === true) {
      return list[0];
    } else {
      let splitList = list.join("/");
      return splitList;
    }
  };

  tableHead = () => {
    return (
      <tr>
        <th>Lift</th>
        <th>Weight</th>
        <th>Reps</th>
        <th>Set</th>
      </tr>
    );
  };

  renderForms = (dayInState, dayToPopulate) => {
    return (
      <tbody>
        <WeeklyFormPrimary
          programDaySearch={this.programDaySearch}
          dayInState={this.state[dayInState] - 1}
          populateMain={this.populateMain}
          dayToPopulate={[dayToPopulate]}
          daysWorkoutInState={this[dayToPopulate]}
        />
        <WeeklyFormAccess daysWorkoutInState={this[dayToPopulate]} />
      </tbody>
    );
  };

  changeDay = direction => {
    if (direction === "next") {
      if (
        this.state.day ===
        program[this.props.settings.program].programWorkouts.length
      ) {
        console.log("error");
        return "error";
      }
      let change = this.state.day + 1;
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    } else {
      if (this.state.day === 1) {
        console.log("error");
        return;
      }
      let change = this.state.day - 1;
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    }
  };

  changeWeek = direction => {
    let change;
    if (direction === "next") {
      let lastWorkoutDay = this.programDaySearch.length - 1;
      if (
        this.todaysWorkout.week === this.programDaySearch[lastWorkoutDay].week
      ) {
        change = [lastWorkoutDay - 4];
      } else {
        change = this.state.day + 4;
      }
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    } else {
      if (this.todaysWorkout.week === 1) {
        change = 1;
      } else {
        change = this.state.day - 4;
      }
      this.setState({
        day: change,
        nextDay: change + 1,
        twoDays: change + 2,
        threeDays: change + 3
      });
    }
  };

  changeToToday = () => {
    this.setState({
      day: this.props.workoutDay,
      nextDay: this.props.workoutDay + 1,
      twoDays: this.props.workoutDay + 2,
      threeDays: this.props.workoutDay + 3
    });
  };

  render() {
    {
      this.getWorkout(this.state.day, "todaysWorkout");
      this.getWorkout(this.state.nextDay, "nextDayWorkouts");
      this.getWorkout(this.state.twoDays, "twoDaysWorkouts");
      this.getWorkout(this.state.threeDays, "threeDaysWorkouts");
    }
    return (
      <div className="weekly-view">
        <div className="workoutday-view">
          <h6>Workout {[this.state.day]}</h6>
          <div className="workoutday-buttons">
            <button onClick={() => this.changeWeek("previous")}>
              Previous Week
            </button>
            <button onClick={() => this.changeDay("previous")}>
              Previous Day
            </button>
            <button onClick={() => this.changeToToday()}>Today</button>
            <button onClick={() => this.changeDay("next")}>Next Day</button>
            <button onClick={() => this.changeWeek("next")}>Next Week</button>
          </div>
        </div>
        <h5>{this.programDaySearch[this.state.day - 1].day}</h5>
        <table>
          <thead>{this.tableHead()}</thead>
          {this.renderForms("day", "todaysWorkout")}
        </table>
        <h5>{this.programDaySearch[this.state.nextDay - 1].day}</h5>
        <table>
          <thead>{this.tableHead()}</thead>
          {this.renderForms("nextDay", "nextDayWorkouts")}
        </table>
        <h5>{this.programDaySearch[this.state.twoDays - 1].day}</h5>
        <table>
          <thead>{this.tableHead()}</thead>
          {this.renderForms("twoDays", "twoDaysWorkouts")}
        </table>
        <h5>{this.programDaySearch[this.state.threeDays - 1].day}</h5>
        <table>
          <thead>{this.tableHead()}</thead>
          {this.renderForms("threedays", "threeDaysWorkouts")}
        </table>
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
  null
)(WeeklyView);
