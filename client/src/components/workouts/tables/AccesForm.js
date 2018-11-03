import React from "react";

export default function AccesForm(props) {
  console.log(props.num);
  return (
    <tr>
      <td data-label="Set">{props.set}</td>
      <td>
        <input
          onChange={e =>
            props.updateVal(
              e.target,
              props.set,
              props.workoutDay,
              "reps",
              props.idToStateReps
            )
          }
          id={props.idToStateReps}
          className="input-field"
          type="text-field"
          placeholder={props.reps}
        />
      </td>
      <td>
        <input
          onChange={e =>
            props.updateVal(
              e.target,
              props.set,
              props.workoutDay,
              "weight",
              props.idToStateWeight
            )
          }
          id={props.idToStateWeight}
          className="input-field"
          type="text-field"
          placeholder="Weight optimal for failure"
        />
      </td>
    </tr>
  );
}
