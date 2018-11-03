import React, { Component } from "react";
import { Line } from "@nivo/line";
import { connect } from "react-redux";
import * as actions from "../../actions";
// import "../style/Graph.css";

let bpObj = {
  id: "benchpress",
  data: []
};
let sqtObj = {
  id: "squat",
  data: []
};
let dlObj = {
  id: "deadlift",
  data: []
};
let mpObj = {
  id: "military press",
  data: []
};

let data = [];

class graph extends Component {
  state = {};

  // // fetch Data from database
  // fetchData = () => {
  //   // action to fetch data
  //   var workoutArr = this.props.fetchWorkoutData();
  //   // log data collected
  //   console.log(workoutArr);

  //   workoutArr.map(workout => {
  //     switch (workout.liftDay) {
  //       case "benchpress":
  //         bpObj.data.push({ x: workout.maxForLift, y: workout.time });
  //         break;
  //       case "squat":
  //         sqtObj.data.push({ x: workout.maxForLift, y: workout.time });
  //         break;
  //       case "deadlift":
  //         dlObj.data.push({ x: workout.maxForLift, y: workout.time });
  //         break;
  //       case "military press":
  //         mpObj.data.push({ x: workout.maxForLift, y: workout.time });
  //         break;
  //       default:
  //         break;
  //     }
  //     data.push(bpObj, sqtObj, dlObj, mpObj);
  //     console.log(data);
  //     this.setState({
  //       data
  //     });
  //   });
  // };

  componentDidMount() {
    // this.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <Line
        width={900}
        height={400}
        margin={{
          top: 10,
          right: 10,
          bottom: 30,
          left: 40
        }}
        data={[
          {
            id: "Bench",
            color: "hsl(321, 70%, 50%)",
            data: [
              { color: "hsl(201, 70%, 50%)", x: "Oct 30", y: 225 },
              { color: "hsl(266, 70%, 50%)", x: "Oct 31", y: 225 },
              { color: "hsl(21, 70%, 50%)", x: "Nov 1", y: 225 }
            ]
          },
          {
            id: "Sqaut",
            color: "hsl(167, 70%, 50%)",
            data: [
              { color: "hsl(46, 70%, 50%)", x: "Oct 30", y: 315 },
              { color: "hsl(359, 70%, 50%)", x: "Oct 31", y: 315 },
              { color: "hsl(270, 70%, 50%)", x: "Nov 1", y: 325 }
            ]
          },
          {
            id: "Deadlift",
            color: "hsl(246, 70%, 50%)",
            data: [
              { color: "hsl(147, 70%, 50%)", x: "Oct 30", y: 365 },
              { color: "hsl(194, 70%, 50%)", x: "Oct 31", y: 365 },
              { color: "hsl(234, 70%, 50%)", x: "Nov 1", y: 365 }
            ]
          },
          {
            id: "Military Press",
            color: "hsl(265, 70%, 50%)",
            data: [
              { color: "hsl(239, 70%, 50%)", x: "Oct 30", y: 155 },
              { color: "hsl(201, 70%, 50%)", x: "Oct 31", y: 155 },
              { color: "hsl(3, 70%, 50%)", x: "Nov 1", y: 155 }
            ]
          }
        ]}
        animate
      />
    );
  }
}
export class Graph extends Component {
  render() {
    return <graph graphData={this.props.graphData} />;
  }
}

function mapStateToProps({ graphData }) {
  return { graphData };
}

export default connect(
  mapStateToProps,
  actions
)(graph);

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

// http://nivo.rocks/line
// render((
//     <ResponsiveLine
//         data={this.props.graphData}
//         margin={{
//             "top": 50,
//             "right": 110,
//             "bottom": 50,
//             "left": 60
//         }}
//         xScale={{
//             "type": "point"
//         }}
//         yScale={{
//             "type": "linear",
//             "stacked": true,
//             "min": "auto",
//             "max": "auto"
//         }}
//         minY="auto"
//         maxY="auto"
//         stacked={true}
//         axisBottom={{
//             "orient": "bottom",
//             "tickSize": 5,
//             "tickPadding": 5,
//             "tickRotation": 0,
//             "legend": "transportation",
//             "legendOffset": 36,
//             "legendPosition": "center"
//         }}
//         axisLeft={{
//             "orient": "left",
//             "tickSize": 5,
//             "tickPadding": 5,
//             "tickRotation": 0,
//             "legend": "count",
//             "legendOffset": -40,
//             "legendPosition": "center"
//         }}
//         dotSize={10}
//         dotColor="inherit:darker(0.3)"
//         dotBorderWidth={2}
//         dotBorderColor="#ffffff"
//         enableDotLabel={true}
//         dotLabel="y"
//         dotLabelYOffset={-12}
//         animate={true}
//         motionStiffness={90}
//         motionDamping={15}
//         legends={[
//             {
//                 "anchor": "bottom-right",
//                 "direction": "column",
//                 "justify": false,
//                 "translateX": 100,
//                 "translateY": 0,
//                 "itemsSpacing": 0,
//                 "itemDirection": "left-to-right",
//                 "itemWidth": 80,
//                 "itemHeight": 20,
//                 "itemOpacity": 0.75,
//                 "symbolSize": 12,
//                 "symbolShape": "circle",
//                 "symbolBorderColor": "rgba(0, 0, 0, .5)",
//                 "effects": [
//                     {
//                         "on": "hover",
//                         "style": {
//                             "itemBackground": "rgba(0, 0, 0, .03)",
//                             "itemOpacity": 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
// ), document.getElementById('chart'))
