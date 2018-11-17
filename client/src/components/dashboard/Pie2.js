import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/modules/actions";
import { Doughnut } from "react-chartjs-2";

class Pie extends Component {
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
      <div className="chart">
        {
          <Doughnut
            data={this.state.chartData}
            width={700}
            height={375}
            options={{
              elements: {
                center: {
                  text: "90%",
                  color: "#FF6384", // Default is #000000
                  fontStyle: "Arial", // Default is Arial
                  sidePadding: 20 // Defualt is 20 (as a percentage)
                }
              }
            }}
          />
        }
      </div>
    );
  }
}

export default Pie;
