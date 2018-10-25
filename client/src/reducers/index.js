import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./auth/authReducer";
import user from "./auth/user";
import measurements from "./workoutData/measurement";
import settings from "./later/settings";
// import videos from './videos';
import workout from "./workoutData/workout";
import program from "./workoutData/program";
import workoutDay from "./workoutData/workoutDay";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  measurement: measurements,
  settings: settings,
  // videos: videos,
  user: user,
  program: program,
  workout: workout,
  workoutDay: workoutDay
});
