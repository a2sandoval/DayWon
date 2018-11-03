import React from "react";
import calcs from "../../utils/calcs";

export default function PieStats(props) {
  return (
    <div className="stats">
      <div className="totals">
        <div className="title">History</div>
        <div className="lists">
          Days logged: <br />
          Total Sets: <br />
          Total Volume: <br />
          Avg Daily Volume:
        </div>
      </div>
      <div>
        <div className="title">Maxes</div>
        <div className="lists row">
          <div className="col s3">
            <p>Benchpress </p>

            <p>
              <MaxRender type="bp" measurement={props.measurement} />
            </p>
          </div>
          <div className="col s3">
            <p>Squat </p>

            <p>
              <MaxRender type="sqt" measurement={props.measurement} />
            </p>
          </div>
          <div className="col s3">
            <p>Deadlift </p>

            <p>
              <MaxRender type="dl" measurement={props.measurement} />
            </p>
          </div>
          <div className="col s3">
            <p>Overhead Press </p>

            <p>
              <MaxRender type="mp" measurement={props.measurement} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaxRender({ type, measurement }) {
  let max = measurement[type];
  return (
    <div>
      Max: {max} <br />
      Training Max: {calcs.trnMaxCalc(max)}
    </div>
  );
}
