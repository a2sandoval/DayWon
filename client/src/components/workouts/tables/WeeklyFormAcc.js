import React from "react";

export default function WeeklyFormAccess(props) {
  let populateExtra = workoutDay => {
    console.log(props);
    return workoutDay.accesWorkouts.map((val, i) => {
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
        </tr>
      );
    });
  };

  return (
    <React.Fragment>{populateExtra(props.daysWorkoutInState)}</React.Fragment>
  );
}
