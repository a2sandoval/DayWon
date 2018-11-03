import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./auth/authReducer";
import user from "./auth/user";
import measurements from "./workoutData/measurement";
import settings from "./later/settings";
// import videos from './videos';
import workout from "./workoutData/workout";
import workoutDay from "./workoutData/workoutDay";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  measurement: measurements,
  settings: settings,
  // videos: videos,
  user: user,
  workout: workout,
  workoutDay: workoutDay
});
