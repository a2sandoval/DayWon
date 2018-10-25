import { FETCH_USERMAX } from '../../actions/types';

export default function(state = 100, action) {
  switch (action.type) {
    case FETCH_USERMAX:
      return action.payload || false;
    default:
      return state;
  }
}

// state was an array object