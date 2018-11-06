import React from "react";
import PrimaryForm from "./PrimaryForm";
import AccesForm from "./AccesForm";

export default function DailyViewLayout(props) {
  console.log(props);

  let primOrAcces = type => {
    if (type === "primary") {
      return props.programDay.primaryWorkouts.reps.map((set, i) => {
        let lift = props.programDay.primaryWorkouts.lift;
        let row = `${lift}_set${i + 1}_row`;
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
            submitWorkout={props.submitWorkout}
            handleSubmit={props.handleSubmit}
          />
        );
      });
    } else {
      return props.programDay.accesWorkouts.map((workout, i) => {
        let lift = props.programDay.accesWorkouts[i].lift;
        return props.programDay.accesWorkouts[i].reps.map((set, j) => {
          let row = `${lift}_set${j + 1}_row`;
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
            />
          );
        });
      });
    }
  };

  return (
    <div className="fillableForm">
      <h2>
        JTS {props.week} Week - Wave {props.wave}: Day {props.workout}
      </h2>
      <h3>Lift Day - {props.day} </h3>
      <h5>{props.programDay.day}</h5>
      <form onSubmit={e => props.handleSubmit(e)}>
        <table className="ui celled table main-lift">
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
