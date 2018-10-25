import axios from "axios";
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
    const response = await axios.post("/signup", formProps);

    dispatch({
      type: AUTH_USER,
      payload: { authenticated: response.data.token }
    });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Email in use"
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/signin", formProps);
    console.log(response);
    dispatch({
      type: AUTH_USER,
      payload: { authenticated: response.data.token }
    });
    dispatch({ type: FETCH_USER, payload: response.data.user });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signInGoogle = callback => async dispatch => {
  try {
    const response = await axios.get("/auth/google");
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", { authenticated: response.data.token });
    callback();
  } catch (e) {
    dispatch({ type: SOCIAL_USER, payload: "Invalid login credentials" });
  }
};

export const signInFacebook = callback => async dispatch => {
  try {
    const response = await axios.get("/auth/facebook");

    dispatch({
      type: AUTH_USER,
      payload: { authenticated: response.data.token }
    });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: SOCIAL_USER, payload: "Invalid login credentials" });
  }
};

export const authUser = cb => async dispatch => {
  const res = await axios.get("/profile");
  dispatch({ type: FETCH_USER, payload: res });
  console.log(res);
  console.log("profile response");
  // if (res.data)
  // dispatch({ type: FETCH_USER_LIFT_DATA, payload: response.data.user });
  cb();
};

export const signout = () => {
  localStorage.removeItem("token");
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
export const submitWorkout = (values, history) => async dispatch => {
  const res = await axios.post("/api/workout", values);

  history.push("/dashboard");
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
