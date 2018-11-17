import React from "react";
import PrimaryForm from "./PrimaryForm";
import AccesForm from "./AccesForm";
import "../../style/Daily.css";

export default function DailyViewLayout(props) {
  // console.log(props);

  let primOrAcces = type => {
    let workoutDay = props.programDay.workout;
    if (type === "primary") {
      return props.programDay.primaryWorkouts.reps.map((set, i) => {
        let lift = props.programDay.primaryWorkouts.lift;
        let row = `lift-${lift}_set-${i + 1}_workoutday-${workoutDay}`;
        return (
          <PrimaryForm
            lift={lift}
            set={i + 1}
            reps={set}
            row={row}
            updateVal={props.updateVal}
            inputRepVal={props.liftingData[lift][i + 1]["reps"]}
            inputWeightVal={props.liftingData[lift][i + 1]["weight"]}
            programDay={props.programDay}
            workoutDay={lift}
            liftingData={props.liftingData}
            currentSet={props.currentSet}
            previousSet={props.previousSet}
            setRowAsCurrent={props.setRowAsCurrent}
            rowIsCurrent={props.rowIsCurrent}
            nextSet={props.nextSet}
          />
        );
      });
    } else {
      return props.programDay.accesWorkouts.map((workout, i) => {
        let lift = props.programDay.accesWorkouts[i].lift;
        return props.programDay.accesWorkouts[i].reps.map((set, j) => {
          let row = `lift-${lift}_set-${j + 1}_workoutday-${workoutDay}`;
          return (
            <AccesForm
              lift={lift}
              set={j + 1}
              reps={set}
              row={row}
              updateVal={props.updateVal}
              inputRepVal={props.liftingData[lift][j + 1]["reps"]}
              inputWeightVal={props.liftingData[lift][j + 1]["weight"]}
              nextSet={props.nextSet}
              currentSet={props.currentSet}
              previousSet={props.previousSet}
              liftingData={props.liftingData}
              setRowAsCurrent={props.setRowAsCurrent}
              rowIsCurrent={props.rowIsCurrent}
              accData={props.measurement.accessoryLifts}
            />
          );
        });
      });
    }
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log("submit handled");
  };

  let keyPress = (e, row) => {
    console.log("key press");
    console.log(e.key);
    if (e.key === "Enter") {
      props.nextSet(e, row);
    }
  };

  return (
    <div className="fillableForm">
      <div className="program-title">
        <div className="program-liftday">{props.programDay.day} Day!</div>
        <div className="program-status">
          Program Day {props.day} Week {props.week} Wave {props.wave}
        </div>
      </div>
      <form
        onSubmit={e => props.handleSubmit(e)}
        onKeyPress={e => keyPress(e, props.currentSet)}
      >
        <div className="main-lift">
          <table>
            <thead>
              <tr>
                <th className="short-width">Set</th>
                <th>Reps</th>
                <th>Weight</th>
                <th>Weight Percentage </th>
              </tr>
            </thead>
            <tbody>
              {primOrAcces("primary")}
              {primOrAcces()}
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          id="workoutSubmit"
          onClick={e => props.submitWorkout(e)}
        >
          Submit Workout
        </button>
      </form>
    </div>
  );
}
