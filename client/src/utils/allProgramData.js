// programData(program, day, userMax);

const program = {
  juggernaut: {
    about:
      "Program is an excellent program for lifters looking to build strenght, speed, and muscle mass",
    timePerPrimarySet: 180,
    programWorkouts: [
      {
        workout: 1,
        week: 1,
        phase: "Accumulation",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: [10, 10, 10, 10, 10],
          sets: 5,
          weightPerc: [0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 2,
        week: 1,
        wave: 10,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [10, 10, 10, 10, 10],
          sets: 5,
          weightPerc: [0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 3,
        week: 1,
        phase: "Accumulation",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [10, 10, 10, 10, 10],
          sets: 5,
          weightPerc: [0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 4,
        week: 1,
        wave: 10,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [10, 10, 10, 10, 10],
          sets: 5,
          weightPerc: [0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 5,
        week: 2,
        phase: "Intensification",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: [10, 10, 10],
          sets: 3,
          weightPerc: [0.675, 0.675, 0.675]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 6,
        week: 2,
        wave: 10,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [10, 10, 10],
          sets: 3,
          weightPerc: [0.675, 0.675, 0.675]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 7,
        week: 2,
        phase: "Intensification",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [10, 10, 10],
          sets: 3,
          weightPerc: [0.675, 0.675, 0.675]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 8,
        week: 2,
        wave: 10,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [10, 10, 10],
          sets: 3,
          weightPerc: [0.675, 0.675, 0.675]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 9,
        week: 3,
        phase: "Realization",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 10,
        week: 3,
        wave: 10,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 11,
        week: 3,
        phase: "Realization",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 12,
        week: 3,
        wave: 10,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 13,
        week: 4,
        phase: "Deload",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 14,
        week: 4,
        wave: 10,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 15,
        week: 4,
        phase: "Deload",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 16,
        week: 4,
        wave: 10,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 17,
        week: 5,
        phase: "accumulation",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: [8, 8, 8, 8, 8],
          sets: 5,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 18,
        week: 5,
        wave: 8,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [8, 8, 8, 8, 8],
          sets: 5,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 19,
        week: 5,
        wave: 8,
        phase: "Accumulation",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [8, 8, 8, 8, 8],
          sets: 5,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 20,
        week: 5,
        wave: 8,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [8, 8, 8, 8, 8],
          sets: 5,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 21,
        week: 6,
        phase: "Intensification",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: [8, 8, 8],
          sets: 3,
          weightPerc: [0.725, 0.725, 0.725]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 22,
        week: 6,
        wave: 8,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [8, 8, 8],
          sets: 3,
          weightPerc: [0.725, 0.725, 0.725]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 23,
        week: 6,
        wave: 8,
        phase: "Intensification",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [8, 8, 8],
          sets: 3,
          weightPerc: [0.725, 0.725, 0.725]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 24,
        week: 6,
        wave: 8,
        phase: "Intensification",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [8, 8, 8],
          sets: 3,
          weightPerc: [0.725, 0.725, 0.725]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 25,
        week: 7,
        phase: "Realization",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 26,
        week: 6,
        wave: 8,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 27,
        week: 6,
        wave: 8,
        phase: "Realization",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 28,
        week: 6,
        wave: 8,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 29,
        week: 8,
        phase: "Deload",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 30,
        week: 8,
        wave: 8,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 31,
        week: 8,
        wave: 8,
        phase: "Deload",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 32,
        week: 8,
        wave: 8,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 33,
        week: 9,
        phase: "Accumulation",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 34,
        week: 9,
        wave: 5,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 35,
        week: 9,
        phase: "Accumulation",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 36,
        week: 9,
        wave: 5,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 37,
        week: 11,
        phase: "Intensification",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 38,
        week: 11,
        wave: 5,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 39,
        week: 11,
        phase: "Intensification",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 40,
        week: 10,
        wave: 5,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 41,
        week: 11,
        phase: "Realization",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 42,
        week: 11,
        wave: 5,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 43,
        week: 11,
        phase: "Realization",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 44,
        week: 11,
        wave: 5,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 45,
        week: 12,
        phase: "Deload",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps"],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 46,
        week: 12,
        wave: 5,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 47,
        week: 12,
        phase: "Deload",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 48,
        week: 12,
        wave: 5,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 49,
        week: 13,
        phase: "Accumulation",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 50,
        week: 13,
        wave: 3,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 51,
        week: 13,
        wave: 3,
        phase: "Accumulation",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 52,
        week: 13,
        wave: 3,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 53,
        week: 14,
        phase: "Intensification",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 54,
        week: 14,
        wave: 3,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 55,
        week: 14,
        wave: 3,
        phase: "Intensification",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 56,
        week: 14,
        wave: 3,
        phase: "Intensification",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 57,
        week: 15,
        phase: "Realization",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, 1, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 58,
        week: 15,
        wave: 3,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, 1, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 59,
        week: 15,
        wave: 3,
        phase: "Realization",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          sets: 5
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 60,
        week: 15,
        wave: 3,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 61,
        week: 16,
        phase: "Deload",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps"],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 62,
        week: 16,
        wave: 3,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 63,
        week: 16,
        wave: 3,
        phase: "Deload",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 64,
        week: 16,
        wave: 3,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      }
    ]
  },

  inverse_jugg: {
    about:
      "Program is an excellent programmers who have used the basic jugg program and are looking for a new level",
    timePerPrimarySet: 90,
    programWorkouts: [
      {
        workout: 1,
        week: 1,
        phase: "Accumulation",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          sets: 10,
          weightPerc: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 2,
        week: 1,
        wave: 10,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          sets: 10,
          weight: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 3,
        week: 1,
        phase: "Accumulation",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          sets: 10,
          weightPerc: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 4,
        week: 1,
        wave: 10,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          sets: 10,
          weight: [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 5,
        week: 2,
        phase: "Intensification",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          sets: 10,
          weightPerc: [
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675
          ]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 6,
        week: 2,
        wave: 10,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          sets: 10,
          weightPerc: [
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675
          ]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 7,
        week: 2,
        phase: "Intensification",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          sets: 10,
          weightPerc: [
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675
          ]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 8,
        week: 2,
        wave: 10,
        phase: "Intensification",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          sets: 10,
          weightPerc: [
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675,
            0.675
          ]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 9,
        week: 3,
        phase: "Realization",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 10,
        week: 3,
        wave: 10,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 11,
        week: 3,
        phase: "Realization",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 12,
        week: 3,
        wave: 10,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, "AMRAP"],
          amrap: this.wave,
          sets: 4,
          weightPerc: [0.5, 0.6, 0.7, 0.75]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 13,
        week: 4,
        phase: "Deload",
        day: "Squat",
        wave: 10,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 14,
        week: 4,
        wave: 10,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 15,
        week: 4,
        phase: "Deload",
        day: "Deadlift",
        wave: 10,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 16,
        week: 4,
        wave: 10,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 17,
        week: 5,
        phase: "accumulation",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 5, 5, 5, 5, 5, 5, 5],
          sets: 8,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 18,
        week: 5,
        wave: 8,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 5, 5, 5, 5, 5, 5, 5],
          sets: 8,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 19,
        week: 5,
        wave: 8,
        phase: "Accumulation",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 5, 5, 5, 5, 5, 5, 5],
          sets: 10,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 20,
        week: 5,
        wave: 8,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 5, 5, 5, 5, 5, 5, 5],
          sets: 8,
          weightPerc: [0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65, 0.65]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 21,
        week: 6,
        phase: "Intensification",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: [3, 3, 3, 3, 3, 3, 3, 3],
          sets: 8,
          weightPerc: [
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725
          ]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 22,
        week: 6,
        wave: 8,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [3, 3, 3, 3, 3, 3, 3, 3],
          sets: 8,
          weightPerc: [
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725
          ]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 23,
        week: 6,
        wave: 8,
        phase: "Intensification",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [3, 3, 3, 3, 3, 3, 3, 3],
          sets: 8,
          weightPerc: [
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725
          ]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 24,
        week: 6,
        wave: 8,
        phase: "Intensification",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [3, 3, 3, 3, 3, 3, 3, 3],
          sets: 8,
          weightPerc: [
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725,
            0.725
          ]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 25,
        week: 7,
        phase: "Realization",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 26,
        week: 6,
        wave: 8,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 27,
        week: 6,
        wave: 8,
        phase: "Realization",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 28,
        week: 6,
        wave: 8,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, 1, "AMRAP"],
          amrap: this.wave,
          sets: 5,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 29,
        week: 8,
        phase: "Deload",
        day: "Squat",
        wave: 8,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 30,
        week: 8,
        wave: 8,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 31,
        week: 8,
        wave: 8,
        phase: "Deload",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 32,
        week: 8,
        wave: 8,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 33,
        week: 9,
        phase: "Accumulation",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 34,
        week: 9,
        wave: 5,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 35,
        week: 9,
        phase: "Accumulation",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 36,
        week: 9,
        wave: 5,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 5, 5, 5, 5, 5],
          sets: 6,
          weightPerc: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 37,
        week: 11,
        phase: "Intensification",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 38,
        week: 11,
        wave: 5,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 39,
        week: 11,
        phase: "Intensification",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 40,
        week: 10,
        wave: 5,
        phase: "Intensification",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 5, 5, 5],
          sets: 4,
          weightPerc: [0.775, 0.775, 0.775, 0.775]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 41,
        week: 11,
        phase: "Realization",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 42,
        week: 11,
        wave: 5,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 43,
        week: 11,
        phase: "Realization",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 44,
        week: 11,
        wave: 5,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 6,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 45,
        week: 12,
        phase: "Deload",
        day: "Squat",
        wave: 5,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps"],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 46,
        week: 12,
        wave: 5,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 47,
        week: 12,
        phase: "Deload",
        day: "Deadlift",
        wave: 5,
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 48,
        week: 12,
        wave: 5,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 4,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 49,
        week: 13,
        phase: "Accumulation",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["20 Steps", "20 Steps", "20 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 50,
        week: 13,
        wave: 3,
        phase: "Accumulation",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 51,
        week: 13,
        wave: 3,
        phase: "Accumulation",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["30 Seconds", "30 Seconds", "30 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 52,
        week: 13,
        wave: 3,
        phase: "Accumulation",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [3, 3, 3, 3, 3, 3, 3],
          sets: 7,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [12, 12, 12, 12],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [15, 15, 15],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 53,
        week: 14,
        phase: "Intensification",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["16 Steps", "16 Steps", "16 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 54,
        week: 14,
        wave: 3,
        phase: "Intensification",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 55,
        week: 14,
        wave: 3,
        phase: "Intensification",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["45 Seconds", "45 Seconds", "45 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 56,
        week: 14,
        wave: 3,
        phase: "Intensification",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [3, 3, 3, 3, 3],
          sets: 5,
          weightPerc: [0.825, 0.825, 0.825, 0.825, 0.825]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10, 10],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [12, 12, 12],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 57,
        week: 15,
        phase: "Realization",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: [5, 3, 2, 1, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 7,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps", "12 Steps"],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 58,
        week: 15,
        wave: 3,
        phase: "Realization",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: [5, 3, 2, 1, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 7,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 59,
        week: 15,
        wave: 3,
        phase: "Realization",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: [5, 3, 2, 1, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 7,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [8, 8, 8],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [6, 6, 6],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 60,
        week: 15,
        wave: 3,
        phase: "Realization",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: [5, 3, 2, 1, 1, 1, "AMRAP"],
          amrap: this.wave,
          sets: 7,
          weightPerc: [0.5, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [8, 8, 8, 8],
            sets: 4,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 61,
        week: 16,
        phase: "Deload",
        day: "Squat",
        wave: 3,
        primaryWorkouts: {
          lift: "Squat",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "RDLs",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Walking Lunges",
            reps: ["12 Steps", "12 Steps"],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 62,
        week: 16,
        wave: 3,
        phase: "Deload",
        day: "Benchpress",
        primaryWorkouts: {
          lift: "Benchpress",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "DB Rows",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Lateral Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Skullcrushers",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Alt Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 63,
        week: 16,
        wave: 3,
        phase: "Deload",
        day: "Deadlift",
        primaryWorkouts: {
          lift: "Deadlift",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Good Mornings",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Step Ups",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Plank",
            reps: ["60 Seconds", "60 Seconds", "60 Seconds"],
            sets: 3,
            weight: "To Failure"
          }
        ]
      },
      {
        workout: 64,
        week: 16,
        wave: 3,
        phase: "Deload",
        day: "Military Press",
        primaryWorkouts: {
          lift: "Military Press",
          reps: ["3-5", "3-5", "3-5"],
          sets: 3,
          weightPerc: [0.6, 0.6, 0.6]
        },
        accesWorkouts: [
          {
            lift: "Lat Pulldowns",
            reps: [10, 10, 10],
            sets: 3,
            weight: "To Failure"
          },
          {
            lift: "DB Front Raise",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "Tricep Pushdown",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          },
          {
            lift: "DB Hammer Curls",
            reps: [10, 10],
            sets: 2,
            weight: "To Failure"
          }
        ]
      }
    ]
  },
  cowboy_method: {
    info: "this method is developed by flksj;fsd;l for "
  }
};

export default program;
