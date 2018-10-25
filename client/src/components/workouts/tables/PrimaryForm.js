import React from "react";
import calcs from "../../../utils/calcs";

function PrimaryForm(props) {
  // console.log(props);
  return (
    <tr>
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
          onChange={e => props.updateVal(e.target)}
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
        <button>next</button>
      </td>
    </tr>
  );
}

export default PrimaryForm;
