import { FETCH_USER, SIGN_OUT_USER } from "../../actions/types";

// state is null before user is authenticated
export default function(
  state = {
    isLoggedIn: false,
    userId: "",
    email: "",
    picture: ""
  },
  action
) {
  // take in the action type and if FETCH_USER return user data as state
  switch (action.type) {
    case FETCH_USER:
      console.log("fetching user");
      return {
        isLoggedIn: true,
        userId: action.payload.id,
        email: action.payload.email
      };
    default:
      return state;
  }
}
