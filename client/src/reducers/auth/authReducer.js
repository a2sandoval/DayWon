import { SOCIAL_USER, SIGN_OUT, AUTH_USER } from "../../actions/types";

// state is null before user is authenticated
export default function(
  state = {
    authenticated: localStorage.getItem("token")
  },
  action
) {
  // take in the action type and if FETCH_USER return user data as state
  switch (action.type) {
    case SOCIAL_USER:
      return action.payload || state;
    case SIGN_OUT:
      return action.payload || state;
    case AUTH_USER:
      return action.payload;
    default:
      return state;
  }
}
