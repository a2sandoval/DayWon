import { CHANGE_WEIGHT } from "../actions/types";

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
    case CHANGE_WEIGHT:
      return action.payload || state;
    default:
      return state;
  }
}

// weight increment will convert to 2.2 for kg
