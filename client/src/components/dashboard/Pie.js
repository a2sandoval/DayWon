/* eslint-disable */
import { render } from 'react-dom'
import React from "react";
import { Pie } from "@nivo/pie";

function MyPie(props) {
  return(
<Pie
  width={450}
  height={250}
  margin={{
    top: 20,
    right: 30,
    bottom: 20,
    left: 30
  }}
  data={[
    {
      id: 'Bench',
      label: 'Bench',
      value: 225,
    },
    {
      id: 'Squat',
      label: 'Squat',
      value: 295,
    },
    {
      id: 'Deadlift',
      label: 'Deadlift',
      value: 360,
    },
    {
      id: 'Military',
      label: 'Military',
      value: 155,
    }
  ]}
  animate
/>
  )
}

export default MyPie

// let data = [
//   {
//     "id": "Benchpress",
//     "label": "Benchpress",
//     "value": 225,
//     "color": "hsl(173, 70%, 50%)"
//   },
//   {
//     "id": "Squat",
//     "label": "Squat",
//     "value": 315,
//     "color": "hsl(316, 70%, 50%)"
//   },
//   {
//     "id": "Deadlift",
//     "label": "Deadlift",
//     "value": 365,
//     "color": "hsl(34, 70%, 50%)"
//   },
//   {
//     "id": "Overhead Press",
//     "label": "Overhead Press",
//     "value": 115,
//     "color": "hsl(271, 70%, 50%)"
//   }
// ];

// // make sure parent container have a defined height when using responsive component,
// // otherwise height will be 0 and no chart will be rendered.
// // website examples showcase many properties, you'll often use just a few of them.
// // function Pie(props) {
//   render ((
//     <ResponsivePie
//       data={data}
//       margin={{
//         top: 40,
//         right: 80,
//         bottom: 80,
//         left: 80
//       }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       colors="nivo"
//       colorBy="id"
//       borderWidth={1}
//       borderColor="inherit:darker(0.2)"
//       radialLabelsSkipAngle={10}
//       radialLabelsTextXOffset={6}
//       radialLabelsTextColor="#333333"
//       radialLabelsLinkOffset={0}
//       radialLabelsLinkDiagonalLength={16}
//       radialLabelsLinkHorizontalLength={24}
//       radialLabelsLinkStrokeWidth={1}
//       radialLabelsLinkColor="inherit"
//       slicesLabelsSkipAngle={10}
//       slicesLabelsTextColor="#333333"
//       animate={true}
//       motionStiffness={90}
//       motionDamping={15}
//       defs={[
//         {
//           id: "dots",
//           type: "patternDots",
//           background: "inherit",
//           color: "rgba(255, 255, 255, 0.3)",
//           size: 4,
//           padding: 1,
//           stagger: true
//         },
//         {
//           id: "lines",
//           type: "patternLines",
//           background: "inherit",
//           color: "rgba(255, 255, 255, 0.3)",
//           rotation: -45,
//           lineWidth: 6,
//           spacing: 10
//         }
//       ]}
//       fill={[
//         {
//           match: {
//             id: "Benchpress"
//           },
//           id: "dots"
//         },
//         {
//           match: {
//             id: "Squat"
//           },
//           id: "dots"
//         },
//         {
//           match: {
//             id: "Deadlift"
//           },
//           id: "dots"
//         },
//         {
//           match: {
//             id: "Overhead Press"
//           },
//           id: "dots"
//         }
//       ]}
//       legends={[
//         {
//           anchor: "bottom",
//           direction: "row",
//           translateY: 56,
//           itemWidth: 100,
//           itemHeight: 18,
//           itemTextColor: "#999",
//           symbolSize: 18,
//           symbolShape: "circle",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemTextColor: "#000"
//               }
//             }
//           ]
//         }
//       ]}
//     />
//   ),
// document.getElementById('pie-chart'))

// export default Pie;
