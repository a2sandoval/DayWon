import { USER_LIFT_DATA, ACCES_LIFT_DATA } from "../actions/types";

export default function(
  state = {
    bp: 225,
    mp: 135,
    dl: 315,
    sqt: 275,
    historicalMaxes: [],
    historicalWorkouts: [
      { lift: "benchpress", weight: 225, reps: 10, time: 20181015 },
      { lift: "squat", weight: 265, reps: 10, time: 20181015 }
    ],
    lastWorkout: 0,
    accessoryLifts: {},
    initialBp: 225,
    initialMp: 135,
    initialSqt: 315,
    initialDl: 275

    // need to have user max, and date, need max to automatically change based on realization phase
  },
  action
) {
  switch (action.type) {
    case USER_LIFT_DATA:
      return (
        {
          bp: action.payload.bpMax,
          mp: action.payload.mpMax,
          dl: action.payload.dlMax,
          sqt: action.payload.sqtMax,
          historicalMaxes: [action.payload.historicalMaxes],
          historicalWorkouts:
            [action.payload.historicalWorkouts] || state.historicalWorkouts,
          lastWorkout: state.lastWorkout,
          accessoryLifts: state.accessoryLifts,
          initialBp: action.payload.historicalMaxes[0].bpMax || action.payload.bpMax,
          initialMp: action.payload.historicalMaxes[0].mpMax || action.payload.mpMax,
          initialDl: action.payload.historicalMaxes[0].dlMax || action.payload.dlMax,
          initialSqt: action.payload.historicalMaxes[0].sqtMax || action.payload.sqtMax
        } || state
      );
    case ACCES_LIFT_DATA:
      return {
        ...state,
        accessoryLifts: action.payload
      };

    default:
      return state;
  }
}
