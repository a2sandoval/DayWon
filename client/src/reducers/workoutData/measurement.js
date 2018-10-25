import { FETCH_USER_LIFT_DATA, FETCH_WORKOUT_DATA } from "../../actions/types";

export default function(
  state = {
    bp: 225,
    mp: 135,
    dl: 315,
    sqt: 275,
    historicalMaxes: [{ date: 20181015, liftDay: "bench", maxForLift: 225 }],
    historicalWorkouts: [
      { lift: "benchpress", weight: 225, reps: 10, time: 20181015 },
      { lift: "squat", weight: 265, reps: 10, time: 20181015 }
    ]
    // need to have user max, and date, need max to automatically change based on realization phase
  },
  action
) {
  switch (action.type) {
    case FETCH_USER_LIFT_DATA:
      return (
        {
          bp: action.payload.bpMax,
          mp: action.payload.mpMax,
          dl: action.payload.dlMax,
          sqt: action.payload.sqtMax,
          historicalMaxes: action.payload.historicalMaxes,
          historicalWorkouts: action.payload.historicalWorkouts
        } || state
      );
    case FETCH_WORKOUT_DATA:
      if (!action.payload) {
        return { historicalWorkouts: state.historicalWorkouts };
      } else {
        return { historicalWorkouts: action.payload };
      }

    default:
      return state;
  }
}
