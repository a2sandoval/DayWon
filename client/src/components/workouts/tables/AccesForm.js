import React from "react";

export default function AccesForm(props) {
  // console.log(props);
  return (
    <tr>
      <td data-label="Set">{props.set}</td>
      <td>
        <input
          onChange={e => props.updateVal(e.target)}
          id={props.idToStateReps}
          className="input-field"
          type="text-field"
          placeholder={props.reps}
        />
      </td>
      <td>
        <input
          onChange={e => props.updateVal(e.target)}
          id={props.idToStateWeight}
          className="input-field"
          type="text-field"
          placeholder="Weight optimal for failure"
        />
      </td>
    </tr>
  );
}
