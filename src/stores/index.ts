import {createStore} from "redux";
import rootReducer from "../reducers";
import {compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createLogger = require("redux-logger");
import { hashHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";

export default function configureStore(preloadedState = {}) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        createLogger(),
        routerMiddleware(hashHistory)
      )
    )
  );

  return store;
}
