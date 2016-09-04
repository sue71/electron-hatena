import client from "../services/APIClient";
import {Endpoints} from "../constants/Endpoints";
import {createAPIError} from "./error";
import {showLoading, dismissLoading} from "./loading";
import {replace} from "react-router-redux";
export class AuthActionType {
  static LOGIN_SUCCESS = "LOGIN_SUCCESS";
  static LOGOUT = "LOGOUT";
}

export interface LoginPayload extends PayloadBase {
  me: Me;
}

export function createPayload(type: string, me: Me): LoginPayload {
  return {
    type: type,
    me: me
  };
}

export function logout() {
  return {
    type: AuthActionType.LOGOUT
  };
}

export function login(payload: Me, redirectTo: string) {
  return (dispatch) => {

    showLoading();

    client
      .post<Me>(Endpoints.LOGIN, payload)
      .then(res => {
        dismissLoading();
        return res;
      })
      .then(res => dispatch(createPayload(AuthActionType.LOGIN_SUCCESS, res.data)))
      .then(() => {
        dispatch(replace(redirectTo || "/"));
      })
      .catch(err => dispatch(createAPIError(err)))
    ;
  };
}
