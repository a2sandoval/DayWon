import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import reduxThunk from "redux-thunk";
// import reducers from "../reducers";

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    // reducers,
    compose(
      applyMiddleware(reduxThunk), // add your middlewares here
      // Conditionally add the Redux DevTools extension enhancer if it is installed.
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default configureStore;
