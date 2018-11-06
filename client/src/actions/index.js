import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  AUTH_USER,
  POST_WORKOUT,
  FETCH_PROGRAM,
  FETCH_WORKOUTDAY,
  FETCH_WORKOUT_DATA,
  SOCIAL_USER,
  FETCH_USER,
  AUTH_ERROR,
  FETCH_USER_LIFT_DATA
} from "./types";
// auth -------------------------------------------------------------

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/signup", formProps);
    console.log(response);
    dispatch(signin(formProps, callback));
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email in use"
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/signin", formProps);
    console.log(response);
    dispatch({
      type: AUTH_USER,
      payload: { authenticated: response.data.token }
    });
    const { token } = response.data;
    // Set token to ls
    localStorage.setItem("token", token);
    // Set token to Auth header
    setAuthToken(token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const authUser = callback => async dispatch => {
  let token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  console.log(decoded);
  dispatch({ type: FETCH_USER, payload: decoded });
};

export const signout = () => {
  localStorage.removeItem("token");
  setAuthToken(false);
  return {
    type: AUTH_USER,
    payload: {
      isLoggedIn: false,
      userId: "",
      email: "",
      name: "",
      picture: ""
    }
  };
};

// WORKOUTS ------------------------------------------
export const submitWorkout = (values, id) => async dispatch => {
  console.log(values);

  const res = await axios.post("/api/workout/", values);
  // history.push("/dashboard");
  dispatch({ type: POST_WORKOUT, payload: res.data });
};

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

export const fetchWorkoutData = () => async dispatch => {
  // const res = await axios.get("/api/workouts");
  // const workouts = res.data;
  dispatch({ type: FETCH_WORKOUT_DATA, payload: null });
};
