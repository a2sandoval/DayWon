import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  // AUTH_USER,
  POST_WORKOUT,
  FETCH_PROGRAM,
  FETCH_WORKOUTDAY,
  // FETCH_WORKOUT_DATA,
  // SOCIAL_USER,
  FETCH_USER,
  AUTH_ERROR,
  FETCH_USER_LIFT_DATA,
  USER_LIFT_DATA
} from "./types";
// auth -------------------------------------------------------------

// export const signout = () => {
//   localStorage.removeItem("token");
//   return {
//     type: AUTH_USER,
//     payload: {
//       isLoggedIn: false,
//       userId: "",
//       email: "",
//       name: "",
//       picture: ""
//     }
//   };
// };

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

// // WORKOUTS ------------------------------------------
export const submitWorkout = values => async dispatch => {
  console.log(values);

  const res = await axios.post("/api/workout/", values);
  // history.push("/dashboard");
  dispatch({ type: POST_WORKOUT, payload: res.data });
};

export const getAccesWorkoutData = values => async dispatch => {
  console.log(values);
  const res = await axios.get("/api/get-accessory-workouts");
  console.log(res);
  // dispatch({type: ACCES_LIFT_DATA, payload: res.data})
};

export const newMax = (values, cb) => async dispatch => {
  console.log(values);
  const res = await axios.post("/api/update-maxes", values);
  console.log(res);
  dispatch({ type: USER_LIFT_DATA, payload: res.data });
  cb();
};

//SETTINGS
export const fetchProgram = () => async dispatch => {
  const res = await axios.get("/api/program");
  dispatch({ type: FETCH_PROGRAM, payload: res.data });
};

export const fetchDay = () => async dispatch => {
  const res = await axios.get("/api/day");
  // TODO: FIX REDUCER
  const day = res.data.length;
  dispatch({ type: FETCH_WORKOUTDAY, payload: day });
};
