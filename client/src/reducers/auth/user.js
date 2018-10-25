import { FETCH_USER, SIGN_OUT_USER } from "../../actions/types";

// state is null before user is authenticated
export default function(
  state = {
    isLoggedIn: false,
    userId: "",
    email: "",
    name: "",
    picture: ""
  },
  action
) {
  // take in the action type and if FETCH_USER return user data as state
  switch (action.type) {
    case FETCH_USER:
      return {
        isLoggedIn: true,
        userId: action.payload._id,
        email: action.payload.email,
        name: action.payload.name
      };
    default:
      return state;
  }
}
