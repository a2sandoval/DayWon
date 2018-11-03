import React from "react";

export default function DailyViewLayout(props) {
  // console.log(props);

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
              <th>Workout</th>
              <th className="short-width">Set</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Weight Percentage </th>
            </tr>
          </thead>
          <tbody>
            {props.primaryForm(props.programDay)}
            {props.accessForm()}
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
