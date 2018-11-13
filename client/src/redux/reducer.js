import { combineReducers } from 'redux';
import { reducer as reduxForm } from "redux-form";
import authReducer from './modules/auth';
import measurements from "../redux/modules/workoutData/measurement";
import settings from "../redux/modules/later/settings";
import workout from "../redux/modules/workoutData/workout";
import workoutDay from "../redux/modules/workoutData/workoutDay";


export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  measurement: measurements,
  settings: settings,
  workout: workout,
  workoutDay: workoutDay
});
