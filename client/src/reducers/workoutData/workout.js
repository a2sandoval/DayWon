import { POST_WORKOUT } from '../../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case POST_WORKOUT:
      return action.payload || false;
    default:
      return state;
  }
}
