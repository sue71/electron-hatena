import client from "../services/APIClient";
import { Endpoints } from '../constants/Endpoints';

export function requireAuth(nextState, replace, callback) {
  const token = localStorage.getItem("token");

  if (!token) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname }
    });
  }

  client
    .get<ListResponse<Article>>(Endpoints.ARTICLES)
    .then( res => {
      callback();
    })
    .catch( err => {
      replace({
        pathname: "/login",
        state: { nextPathname: nextState.location.pathname }
      });
    })
    ;
}
