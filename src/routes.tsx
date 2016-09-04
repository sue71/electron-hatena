import "react";
import { Route, Redirect } from "react-router";
import AppContainer from "./components/App/AppContainer";
import {requireAuth} from "./utils/requireAuth";

import LoginContainer from "./components/Login/LoginContainer";
import ArticlesContainer from "./components/Articles/ArticlesContainer";
export default (
  <Route component={AppContainer}>
    <Redirect from="/" to="articles" />
    <Route path="login" component={LoginContainer} />
    <Route path="articles" component={ArticlesContainer} onEnter={requireAuth} />
  </Route>
);
