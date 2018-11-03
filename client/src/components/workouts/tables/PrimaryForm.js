import React from "react";
import calcs from "../../../utils/calcs";

function PrimaryForm(props) {
  // console.log(props);

  let isCurrentSet = (row, classNaming) => {
    if (!props.currentSet) {
      props.setRowAsCurrent(row);
    }
    // if currentSet is this row
    if (props.currentSet === row) {
      return !classNaming ? "Next" : "currentSet";
    }
    // else if previousSet holds this row
    else if (props.previousSet.includes(row) === true) {
      return !classNaming ? "Done" : "previousSet";
    }
    // if its not previous and not current while current is set, then it must be upcoming
    else if (
      props.previousSet.includes(row) === false &&
      props.currentSet !== row
    ) {
      return !classNaming ? "Upcoming" : "upcomingSet";
    }
  };

  let renderVal = type => {
    // let workoutData = props.liftingData[props.workoutDay][props.set];
    if (!props.liftingData[props.workoutDay][props.set]) {
      if (type === "reps") {
        return props.inputRepVal;
      } else {
        return props.inputWeightVal;
      }
    } else {
      let workoutData = props.liftingData[props.workoutDay][props.set];
      console.log(workoutData[type]);
      return workoutData[type];
    }
  };

  return (
    <tr className={isCurrentSet(props.row, "for class naming")} id={props.row}>
      <td data-label="Set">{props.set}</td>
      <td>
        <input
          onChange={e =>
            props.updateVal(e.target, props.set, props.workoutDay, "reps")
          }
          className="input-field"
          id={props.idToStateReps}
          type="text-field"
          placeholder={renderVal("reps")}
          value={renderVal("reps")}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          onChange={e =>
            props.updateVal(e.target, props.set, props.workoutDay, "weight")
          }
          id={props.idToStateWeight}
          type="text-field"
          placeholder={renderVal("weight")}
          value={renderVal("weight")}
        />{" "}
      </td>
      <td data-label="Weight-Percentage">
        {calcs.weightPerc(props.weightPerc)}
      </td>
      <td>
        <button onClick={() => props.nextSet(props.row)}>
          {isCurrentSet(props.row)}
        </button>
      </td>
    </tr>
  );
}

export default PrimaryForm;
