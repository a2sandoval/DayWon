import { FETCH_USER, SIGN_OUT_USER } from "../../redux/modules/actions/types";

// state is null before user is authenticated
export default function(
  state = {
    isLoggedIn: false,
    name: "",
    email: "",
    picture: "",
    userId: "",
    settingsId: "",
    maxesId: "",
    workoutsId: ""
  },
  action
) {
  // take in the action type and if FETCH_USER return user data as state
  switch (action.type) {
    case FETCH_USER:
      console.log("fetching user");
      console.log(action.payload);
      return {
        isLoggedIn: true,
        name: action.payload.profile.name,
        email: action.payload.profile.email,
        picture: action.payload.profile.picture,
        userId: action.payload.id._id,
        settingsId: action.payload.id.settings,
        maxesId: action.payload.id.userMaxes,
        workoutsId: action.payload.id.historicalWorkouts
      };

    default:
      return state;
  }
}
