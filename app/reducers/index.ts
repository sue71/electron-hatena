import app from "./app";
import auth from "./auth";
import article from "./article";
import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import {reducer as form} from "redux-form";

export default combineReducers({
  app,
  auth,
  article,
  routing,
  form
});
