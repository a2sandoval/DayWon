import React, { Component } from "react";
// import { Line } from "@nivo/line";
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import "../style/graph.css"
import { Bar, Line, Pie, Bubble, Doughnut, Scatter } from 'react-chartjs-2';


class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Deadlift", "Benchpress", "Squat", "Military Press"],
        datasets: [
          {
            label: "Weight Progress",
            fill: false,
            data: [180, 165, 245, 130],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)"
            ]
          },
          {
            label: "Weight Update",
            fill: true,
            data: [195, 185, 250, 125],
            backgroundColor: [
              "rgba(200, 100, 132, 0.6)",
              "rgba(54, 100, 235, 0.6)",
              "rgba(255, 226, 86, 0.6)",
              "rgba(75, 152, 192, 0.6)"
            ]
          }
        ]
      }
    };
  }

    render() {
        return (
            <div className='chart'>
                { <Bar
                    data={this.state.chartData}
                    width={700}
                    height={375}
                    options={{
                        title: {
                            display: true,
                            text: 'Best lift'
                        },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                    }}
                    min={50}
                    max={200}
                /> }
                {/* {<Doughnut
                    data={this.state.chartData}
                    width={700}
                    height={375}
                    options={{
                        elements: {
                            center: {
                                text: '90%',
                                color: '#FF6384', // Default is #000000
                                fontStyle: 'Arial', // Default is Arial
                                sidePadding: 20 // Defualt is 20 (as a percentage)
                            }
                        }
                    }}
                />} */}
      </div>
    );
  }
}

export default Graph;

// let bpObj = {
//     id: "benchpress",
//     data: []
//   };
//   let sqtObj = {
//     id: "squat",
//     data: []
//   };
//   let dlObj = {
//     id: "deadlift",
//     data: []
//   };
//   let mpObj = {
//     id: "military press",
//     data: []
//   };
// let data = [];

// class graph extends Component {
//   state = {};

//   componentDidMount() {}

//   render() {
//     console.log(this.props);
//     return (
//       <Bar
//         width={900}
//         height={400}
//         margin={{
//           top: 10,
//           right: 10,
//           bottom: 30,
//           left: 40
//         }}
//         data={[
//           {
//             id: "Bench",
//             color: "hsl(321, 70%, 50%)",
//             data: [
//               { color: "hsl(201, 70%, 50%)", x: "Oct 30", y: 225 },
//               { color: "hsl(266, 70%, 50%)", x: "Oct 31", y: 225 },
//               { color: "hsl(21, 70%, 50%)", x: "Nov 1", y: 225 }
//             ]
//           },
//           {
//             id: "Sqaut",
//             color: "hsl(167, 70%, 50%)",
//             data: [
//               { color: "hsl(46, 70%, 50%)", x: "Oct 30", y: 315 },
//               { color: "hsl(359, 70%, 50%)", x: "Oct 31", y: 315 },
//               { color: "hsl(270, 70%, 50%)", x: "Nov 1", y: 325 }
//             ]
//           },
//           {
//             id: "Deadlift",
//             color: "hsl(246, 70%, 50%)",
//             data: [
//               { color: "hsl(147, 70%, 50%)", x: "Oct 30", y: 365 },
//               { color: "hsl(194, 70%, 50%)", x: "Oct 31", y: 365 },
//               { color: "hsl(234, 70%, 50%)", x: "Nov 1", y: 365 }
//             ]
//           },
//           {
//             id: "Military Press",
//             color: "hsl(265, 70%, 50%)",
//             data: [
//               { color: "hsl(239, 70%, 50%)", x: "Oct 30", y: 155 },
//               { color: "hsl(201, 70%, 50%)", x: "Oct 31", y: 155 },
//               { color: "hsl(3, 70%, 50%)", x: "Nov 1", y: 155 }
//             ]
//           }
//         ]}
//         animate
//       />
//     );
//   }
// }
// export class Graph extends Component {
//   render() {
//     return <graph graphData={this.props.graphData} />;
//   }
// }

// function mapStateToProps({ graphData }) {
//   return { graphData };
// }

// export default connect(
//   mapStateToProps,
//   actions
// )(graph);
