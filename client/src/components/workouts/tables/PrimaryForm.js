import React from "react";
import calcs from "../../../utils/calcs";

function PrimaryForm(props) {
  // console.log(props);

  let isCurrentSet = row => {
    console.log(props);
    // if currentSet is this row
    if (props.currentSet === row) {
      return "Next";
    }
    // else if previousSet holds this row
    else if (props.previousSet.includes(row) === true) {
      return "Done";
    }
    // if it's not a previous set but isnt set as current because current isn't set, set it as current
    else if (!props.currentSet) {
      props.setRowAsCurrent(row);
      return "Next";
    }
    // if its not previous and not current while current is set, then it must be upcoming
    else if (
      props.previousSet.includes(row) === false &&
      props.currentSet !== row
    ) {
      return "Coming Up";
    }
  };

  let classNaming = name => {
    if (name === props.row) {
      return "currentSet";
    } else if (props.previousSet.includes(name) === true) {
      return "previousSet";
    } else {
      return "upcomingSet";
    }
  };

  return (
    <tr className={classNaming(props.rowClassNaming)} id={props.row}>
      <td data-label="Set">{props.set}</td>
      <td>
        <input
          onChange={e => props.updateVal(e.target)}
          className="input-field"
          id={props.idToStateReps}
          type="text-field"
          placeholder={props.reps}
          value={props.inputRepVal}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          onChange={e => props.updateVal(e.target, props.set, props.workoutDay)}
          id={props.idToStateWeight}
          type="text-field"
          placeholder={props.inputWeightVal}
          value={props.inputWeightVal}
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
