import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  // AUTH_USER,
  POST_WORKOUT,
  FETCH_PROGRAM,
  FETCH_WORKOUTDAY,
  CHANGE_SETTINGS,
  ACCES_LIFT_DATA,
  FETCH_USER,
  AUTH_ERROR,
  FETCH_USER_LIFT_DATA,
  USER_LIFT_DATA
} from "./types";
// auth -------------------------------------------------------------

export const fetchUser = userId => async dispatch => {
  console.log(userId);
  try {
    const response = await axios
      .get(`/api/populateUserForState/${userId}`)
      .then(user => {
        console.log(user.data);
        return user.data;
      });
    console.log(response);
    // dispatch({type: , payload: {}})
    // dispatch({type: })
  } catch (e) {
    console.log(e);
  }
};

export const userToDb = (res, cb) => async dispatch => {
  console.log(res);
  try {
    const response = await axios.post("/api/user", res).then(function(user) {
      console.log(user);
      return user.data;
    });
    console.log(response);
    dispatch({
      type: FETCH_USER,
      payload: { profile: res, id: response }
    });
    cb();
  } catch (e) {
    console.log("error");
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const getAccesWorkoutData = (values, cb) => async dispatch => {
  console.log(values);
  var lastWorkout = values.length - 1;
  if (lastWorkout === 0) {
    return null;
  }
  var accObj = {};
  var keys = [];
  for (let i = lastWorkout; i >= lastWorkout - 3; i--) {
    if (i <= 0) {
      return;
    }
    keys = Object.keys(values[i]);
    for (let workout of keys) {
      if (workout === "date" || workout === "workout") {
      } else {
        accObj[workout] = values[i][workout]["1"]["weight"];
      }
    }
  }
  accObj.lastWorkout = values[lastWorkout]["workout"];
  console.log(accObj);
  dispatch({ type: ACCES_LIFT_DATA, payload: accObj });
  cb();
};

// // WORKOUTS ------------------------------------------
export const submitWorkout = values => async dispatch => {
  console.log(values);

  const res = await axios.post("/api/workout/", values);
  // history.push("/dashboard");
  dispatch({ type: POST_WORKOUT, payload: res.data });
};

export const newMax = (values, cb) => async dispatch => {
  console.log(values);
  const res = await axios.post("/api/update-maxes", values);
  console.log(res);
  dispatch({ type: USER_LIFT_DATA, payload: res.data });
  cb();
};

//SETTINGS
export const fetchSettings = value => async dispatch => {
  const res = await axios.get("/api/settings/" + value.settingsId);
  console.log(res.data);
  dispatch({ type: CHANGE_SETTINGS, payload: res.data });
};

export const submitSettings = value => async dispatch => {
  const res = await axios.post("/api/submit-settings/" + value.userId, value);
  console.log(res.data);
  dispatch({ type: CHANGE_SETTINGS, payload: res.data });
};
