import { CHANGE_SETTINGS } from "../actions/types";

export default function(
  state = {
    weightType: "lb",
    weightIncrement: 2.5,
    program: "juggernaut",
    timePerSet: 180
  },
  action
) {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {
        weightType: action.payload.weightType || state.weightType,
        weightIncrement:
          action.payload.weightIncrement || state.weightIncrement,
        program: action.payload.program || state.program,
        timePerSet: action.payload.program || state.timePerSet
      };
    default:
      return state;
  }
}

// weight increment will convert to 2.2 for kg
