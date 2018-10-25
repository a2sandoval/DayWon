import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import calcs from "../../utils/calcs";
import program from "../../utils/allProgramData";

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

  populateExtra = dayEntered => {
    return this[dayEntered].accesWorkouts.map((val, i) => {
      var setArr = [];
      var repArr = [];
      let sets = null;
      let reps = null;
      val.reps.map((repsInSet, i) => {
        let setCount = i + 1;
        setArr.push(setCount);
        repArr.push(repsInSet);
        let key = i;
      });

      if (repArr.every(val => val === repArr[0])) {
        sets = setArr[0] + "-" + setArr[setArr.length - 1];
        reps = repArr[0];
      } else {
        sets = setArr.join("/");
        reps = repArr.join("/");
      }
      return (
        <tr>
          <td>{val.lift}</td>
          <td>-</td>
          <td>{reps}</td>
          <td>{sets}</td>
          <td>-</td>
        </tr>
      );
    });
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
      <div>
        <div>
          <h6>Workout {[this.state.day]}</h6>
          <h6>
            <button onClick={() => this.changeWeek("previous")}>
              Previous Week
            </button>
            <button onClick={() => this.changeDay("previous")}>
              Previous Day
            </button>
            <button onClick={() => this.changeToToday()}>Today</button>
            <button onClick={() => this.changeDay("next")}>Next Day</button>
            <button onClick={() => this.changeWeek("next")}>Next Week</button>
          </h6>
        </div>
        <h4>{this.programDaySearch[this.state.day - 1].day}</h4>
        <table>
          <thead>
            <tr>
              <th>Lift</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.programDaySearch[this.state.day - 1].day}</td>
              <td>{this.populateMain("todaysWorkout", "weight")}</td>
              <td> {this.populateMain("todaysWorkout", "reps")} </td>
              <td>{this.populateMain("todaysWorkout", "set")}</td>
              <td>{this.populateMain("todaysWorkout", "weightPerc")}</td>
            </tr>
            {this.populateExtra("todaysWorkout")}
          </tbody>
        </table>
        <h4>{this.programDaySearch[this.state.nextDay - 1].day}</h4>
        <table>
          <thead>
            <tr>
              <th>Lift</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.programDaySearch[this.state.nextDay - 1].day}</td>
              <td>{this.populateMain("nextDayWorkouts", "weight")}</td>
              <td> {this.populateMain("nextDayWorkouts", "reps")} </td>
              <td>{this.populateMain("nextDayWorkouts", "set")}</td>
              <td>{this.populateMain("nextDayWorkouts", "weightPerc")}</td>
            </tr>
            {this.populateExtra("nextDayWorkouts")}
          </tbody>
        </table>
        <h4>{this.programDaySearch[this.state.twoDays - 1].day}</h4>
        <table>
          <thead>
            <tr>
              <th>Accessory to </th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.programDaySearch[this.state.twoDays - 1].day}</td>
              <td>{this.populateMain("twoDaysWorkouts", "weight")}</td>
              <td> {this.populateMain("twoDaysWorkouts", "reps")} </td>
              <td>{this.populateMain("twoDaysWorkouts", "set")}</td>
              <td>{this.populateMain("twoDaysWorkouts", "weightPerc")}</td>
            </tr>
            {this.populateExtra("twoDaysWorkouts")}
          </tbody>
        </table>
        <h4>{this.programDaySearch[this.state.threeDays - 1].day}</h4>
        <table>
          <thead>
            <tr>
              <th>Accessory to </th>
              <th>Weight</th>
              <th>Reps</th>
              <th>Set</th>
              <th>% of Max</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{this.programDaySearch[this.state.threeDays - 1].day}</td>
              <td>{this.populateMain("threeDaysWorkouts", "weight")}</td>
              <td> {this.populateMain("threeDaysWorkouts", "reps")} </td>
              <td>{this.populateMain("threeDaysWorkouts", "set")}</td>
              <td>{this.populateMain("threeDaysWorkouts", "weightPerc")}</td>
            </tr>
            {this.populateExtra("threeDaysWorkouts")}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({
  workoutDay,
  userMaxes,
  program,
  powerliftDay,
  measurement,
  settings
}) {
  return {
    workoutDay,
    userMaxes,
    program,
    powerliftDay,
    measurement,
    settings
  };
}

export default connect(
  mapStateToProps,
  null
)(WeeklyView);
