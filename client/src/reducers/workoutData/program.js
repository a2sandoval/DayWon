export default function() {
  return {
    workout: [],
    wave: null,
    wkType: "",
    accWorkouts: [],
    workoutType: "",

    increments(weight, weightCapacity = 2.5) {
      //incrementing for weights available. Divide actual weight by weight capacity, if the decimal place rounds up or down we determine the fixed weight for the user
      let fixedWeight = Math.round(weight / weightCapacity) * weightCapacity;
      console.log(fixedWeight);
      return fixedWeight;
      // if (remainder >= 1.25) {
      //   return (fixedWeight += remainder);
      // } else {
      //   return (fixedWeight -= remainder);
      // }
    },

    newTrainingMax(lift, repStandard, reps, trnMax) {
      if (lift == "bench" || lift == "military press") {
        return (trnMax = (reps - repStandard) * 2.5 + trnMax);
      }
    },

    trnMaxCalc(max) {
      let trnMax = max * 0.9;
      return trnMax;
    },

    oneRepMaxCalc(reps, weight) {
      let oneRepMax = reps * weight * 0.0333 + weight;
      return oneRepMax;
    },

    setCalc(set, weight, reps) {
      return {
        set: set,
        weight: weight,
        reps: reps
      };
    },

    accumWkCalc(wave, trnMax) {
      let weight, trueWeight;
      this.workout = [];
      this.accessoryLifts("accumulation", this.workoutType);
      switch (wave) {
        case 10:
          weight = trnMax * 0.6;
          trueWeight = this.increments(weight);
          console.log(trueWeight);
          for (let i = 1; i < 6; i++) {
            console.log(this.setCalc);
            this.workout.push(this.setCalc(i, trueWeight, 10));
          }
          return this.workout;
        case 8:
          weight = trnMax * 0.65;
          trueWeight = this.increments(weight);
          for (let i = 1; i < 6; i++) {
            this.workout.push(this.setCalc(i, trueWeight, 8));
          }
          console.log(this.workout);
          return this.workout;
        case 5:
          weight = trnMax * 0.7;
          trueWeight = this.increments(weight);
          for (let i = 1; i < 6; i++) {
            this.workout.push(this.setCalc(i, trueWeight, 5));
          }
          return this.workout;
        case 3:
          weight = trnMax * 0.75;
          trueWeight = this.increments(weight);
          for (let i = 1; i < 6; i++) {
            this.workout.push(this.setCalc(i, trueWeight, 3));
          }
          return this.workout;

        default:
      }
    },

    intensWkCalc(wave, trnMax) {
      let weight, trueWeight;
      this.workout = [];
      this.accessoryLifts("intensification", this.workoutType);
      switch (wave) {
        case 10:
          for (let i = 0; i < 6; i++) {
            if (0 <= i && i <= 2) {
              if (i == 0) {
                weight = trnMax * 0.55;
              } else {
                weight = trnMax * 0.625;
              }

              trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 5));
            } else {
              weight = trnMax * 0.675;
              trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 10));
              console.log(this.workout);
            }
          }
          return this.workout;
        case 8:
          for (let i = 1; i < 6; i++) {
            if (i == 1 || i == 2) {
              if (i == 0) {
                let weight = trnMax * 0.6;
              } else {
                let weight = trnMax * 0.675;
              }

              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 3));
            } else {
              let weight = trnMax * 0.725;
              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 8));
            }
          }
          return this.workout;
        case 5:
          for (let i = 1; i < 7; i++) {
            if (i == 1 || i == 2) {
              if (i == 0) {
                let weight = trnMax * 0.65;
              } else {
                let weight = trnMax * 0.725;
              }

              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 2));
            } else {
              let weight = trnMax * 0.775;
              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 5));
            }
          }
          return this.workout;
        case 3:
          for (let i = 1; i < 8; i++) {
            if (i == 1 || i == 2) {
              if (i == 0) {
                let weight = trnMax * 0.7;
              } else {
                let weight = trnMax * 0.775;
              }

              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 1));
            } else {
              let weight = trnMax * 0.825;
              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 3));
            }
          }
          return this.workout;

        default:
          console.log("not a wave");
          break;
      }
    },

    realizationMetrics: {
      weightPerc: [
        [0.5, 0.6, 0.7, 0.75],
        [0.5, 0.6, 0.7, 0.75, 0.8],
        [0.5, 0.6, 0.7, 0.75, 0.8, 0.85],
        [0.5, 0.6, 0.7, 0.75, 0.8, 0.9]
      ],
      reps: [
        [5, 3, 1, "AMRAP"],
        [5, 3, 2, 1, "AMRAP"],
        [5, 3, 2, 1, 1, "AMRAP"],
        [5, 3, 2, 1, 1, 1, "AMRAP"]
      ]
    },

    realizeWkCalc(wave, trnMax) {
      this.workout = [];
      this.accessoryLifts("realization", this.workoutType);
      switch (wave) {
        case 10:
          for (let i = 0; i < 4; i++) {
            let perc = this.realizationMetrics.weightPerc[0];
            let reps = this.realizationMetrics.reps[0];
            let set = i + 1;
            let weight = perc[i] * trnMax;
            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(set, trueWeight, reps[i]));
          }
          return this.workout;
        case 8:
          for (let i = 0; i < 5; i++) {
            let perc = this.realizationMetrics.weightPerc[0];
            let reps = this.realizationMetrics.reps[0];
            let set = i + 1;
            let weight = perc[i] * trnMax;
            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(set, trueWeight, reps[i]));
          }
          return this.workout;
        case 5:
          let weight;
          for (let i = 1; i < 6; i++) {
            if (i == 1 || i == 2) {
              if (i == 0) {
                let weight = trnMax * 0.65;
              } else {
                let weight = trnMax * 0.725;
              }
              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 2));
            } else {
              let weight = trnMax * 0.775;
              let trueWeight = this.increments(weight);
              this.workout.push(this.setCalc(i, trueWeight, 5));
            }
          }
          return this.workout;
        case 3:
          for (let i = 0; i < 7; i++) {
            let perc = this.realizationMetrics.weightPerc[0];
            let reps = this.realizationMetrics.reps[0];
            let set = i + 1;
            let weight = perc[i] * trnMax;
            let trueWeight = this.increments(weight);
            this.workout.push(this.setCalc(set, trueWeight, reps[i]));
          }
          return this.workout;

        default:
          return console.log("not a wave");
      }
    },

    deloadMetrics: {
      weightPerc: [0.4, 0.5, 0.6],
      reps: [5]
    },

    deloadWkCalc(wave, trnMax) {
      this.workout = [];
      this.accessoryLifts("deload", this.workoutType);
      for (let i = 0; i < 3; i++) {
        let perc = this.deloadMetrics.weightPerc[0];
        let reps = this.deloadMetrics.reps[0];
        let set = i + 1;
        let weight = perc[i] * trnMax;
        let trueWeight = this.increments(weight);
        this.workout.push(this.setCalc(set, trueWeight, reps));
      }
      return this.workout;
    },

    accWorkoutsKey: {
      squats: {
        accumulation: [
          ["RDLs", 3, 12],
          ["Walking Lunges", 3, 2],
          ["Plank", 3, "60 Sec"]
        ],
        intensification: [
          ["RDLs", 3, 10],
          ["Walking Lunges", 3, 16],
          ["Plank", 3, "45 Sec"]
        ],
        realization: [
          ["RDLs", 3, 8],
          ["Walking Lunges", 3, 1],
          ["Plank", 3, "60 Sec"]
        ],
        deload: [
          ["RDLs", 2, 10],
          ["Walking Lunges", 2, 12],
          ["Plank", 3, "60 Sec"]
        ]
      },
      bench: {
        accumulation: [
          ["DB Rows", 4, 12],
          ["DB Lateral Raise", 3, 15],
          ["DB Skullcrusher", 3, 15],
          ["DB Alt Curl", 3, 15]
        ],
        intensification: [
          ["DB Rows", 4, 10],
          ["DB Lateral Raise", 3, 12],
          ["DB Skullcrusher", 3, 12],
          ["DB Alt Curl", 3, 12]
        ],
        realization: [
          ["DB Rows", 4, 8],
          ["DB Lateral Raise", 3, 10],
          ["DB Skullcrusher", 3, 10],
          ["DB Alt Curl", 3, 10]
        ],
        deload: [
          ["DB Rows", 3, 10],
          ["DB Lateral Raise", 2, 10],
          ["DB Skullcrusher", 2, 10],
          ["DB Alt Curl", 2, 10]
        ]
      },
      deadlift: {
        accumulation: [
          ["Good Mornings", 3, 12],
          ["Step Ups", 3, 10],
          ["Planks", 3, "30 Sec"]
        ],
        intensification: [
          ["Good Mornings", 3, 10],
          ["Step Ups", 3, 8],
          ["Planks", 3, "45 Sec"]
        ],
        realization: [
          ["Good Mornings", 3, 8],
          ["Step Ups", 3, 6],
          ["Planks", 3, "60 Sec"]
        ],
        deload: [
          ["Good Mornings", 2, 10],
          ["Step Ups", 2, 10],
          ["Planks", 3, "60 Sec"]
        ]
      },
      "military press": {
        accumulation: [
          ["Lat Pulldown", 4, 12],
          ["DB Front Raise", 3, 15],
          ["Tri Pushdown", 3, 15],
          ["DB Hammer Curls", 3, 15]
        ],
        intensification: [
          ["Lat Pulldown", 4, 10],
          ["DB Front Raise", 3, 12],
          ["Tri Pushdown", 3, 12],
          ["DB Hammer Curls", 3, 12]
        ],
        realization: [
          ["Lat Pulldown", 4, 8],
          ["DB Front Raise", 3, 10],
          ["Tri Pushdown", 3, 10],
          ["DB Hammer Curls", 3, 10]
        ],
        deload: [
          ["Lat Pulldown", 3, 10],
          ["DB Front Raise", 2, 10],
          ["Tri Pushdown", 2, 10],
          ["DB Hammer Curls", 2, 10]
        ]
      }
    },
    // looping through the accessory workouts object to push to workout array
    fillOutAccessoryLifts(myAccessoryLifts, lowerCaseLiftType, wkType) {
      // Find workout type(bench, etc) and week (accumulation) then loop through the array and push workouts titles to myAccessoryLIfts object
      for (let val of this.accWorkoutsKey[lowerCaseLiftType][wkType]) {
        myAccessoryLifts.workouts.push(val[0]);
      }
      // testing
      var numberOfWorkouts =
        this.accWorkoutsKey[lowerCaseLiftType][wkType].length - 1;
      // console.log(numberOfWorkouts);

      // we have the workout names, now we need the sets/reps built out
      // loop through workouts in type/phase and for each workout find the number of sets
      for (let i = 0; i <= numberOfWorkouts; i++) {
        // loops throgh workout
        var workoutArr = [];
        var valueOfSets = this.accWorkoutsKey[lowerCaseLiftType][wkType][i][1];
        // console.log(valueOfSets);
        // creates set for each need in value
        for (var j = 0; j <= valueOfSets; j++) {
          let k = j + 1;
          var valueOfReps = this.accWorkoutsKey[lowerCaseLiftType][wkType][
            i
          ][2];
          // console.log(valueOfReps);
          workoutArr.push([k, valueOfReps]);
        }
        myAccessoryLifts.workoutList.push(workoutArr);
        // console.log(myAccessoryLifts);
      }
      this.workout.push(myAccessoryLifts);
      return this.workout;
    },

    accessoryLifts(wkType, liftType) {
      var lowerCaseLiftType = liftType.toLowerCase();
      var myAccessoryLifts = {
        workouts: [],
        workoutList: []
      };
      if (
        lowerCaseLiftType === "bench" ||
        lowerCaseLiftType === "squats" ||
        lowerCaseLiftType === "deadlift" ||
        lowerCaseLiftType === "military press"
      ) {
        return this.fillOutAccessoryLifts(
          myAccessoryLifts,
          lowerCaseLiftType,
          wkType
        );
      } else {
        console.log("something went wrong");
      }
    }
  };
}
