import React from "react";

export default function AccesForm(props) {
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

  // console.log(props);
  return (
    <tr className={isCurrentSet(props.row, "for class naming")} id={props.row}>
      <td data-label="Set">{[props.set] + " - " + [props.lift]}</td>
      <td>
        <input
          onChange={e =>
            props.updateVal(
              e,
              props.set,
              props.workoutDay,
              "reps",
              props.idToStateReps,
              props.id
            )
          }
          id={props.idToStateReps}
          className="input-field"
          type="text-field"
          placeholder={props.reps}
          value={props.liftingData[props.lift][props.set]["reps"]}
        />
      </td>
      <td>
        <input
          onChange={e =>
            props.updateVal(
              e,
              props.set,
              props.workoutDay,
              "weight",
              props.idToStateWeight,
              props.id
            )
          }
          id={props.idToStateWeight}
          className="input-field"
          type="text-field"
          placeholder="Weight optimal for failure"
          value={props.liftingData[props.lift][props.set]["weight"]}
        />
      </td>
      <td data-label="Weight-Percentage">
        {props.liftingData[props.lift][props.set]["weightPerc"]}
      </td>
      <td>
        <button onClick={e => props.nextSet(e, props.row)}>
          {isCurrentSet(props.row)}
        </button>
      </td>
    </tr>
  );
}
