import React from "react";
import calcs from "../../utils/calcs";

export default function PieStats(props) {
  return (
    <div className="stats">
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
            <p>Military</p>

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
    <React.Fragment>
      1RM: {max} <br />
      T1RM: {calcs.trnMaxCalc(max)}
    </React.Fragment>
  );
}
