import React from "react";

export default function DailyViewLayout(props) {
  // console.log(props);

  return (
    <div className="fillableForm">
      <h2>
        JTS {props.week} Week - Wave {props.wave}: Day {props.workout}
      </h2>
      <h3>Lift Day - {props.day} </h3>
      <h5>{props.programDay}</h5>
      <table className="ui celled table main-lift">
        <thead>
          <tr>
            <th className="short-width">Set</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Weight Percentage </th>
          </tr>
        </thead>
        <tbody>{props.primaryForm()}</tbody>
      </table>
      {props.accessForm()}
      <button type="submit" id="workoutSubmit" onClick={props.submitWorkout()}>
        Submit Workout
      </button>
    </div>
  );
}
