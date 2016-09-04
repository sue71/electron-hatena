import {AuthActionType} from "../actions/auth";

export interface AuthState {
  me: Me;
}

export default function (state: AuthState, action: any) {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      if (action.me && action.me.token) {
        localStorage.setItem("token", action.me.token);
      }
      return {
        me: action.me
      };
    case AuthActionType.LOGOUT:
      localStorage.removeItem("token");
      return {
        me: null
      };
    default:
      return {
        me: null
      };
  }
}
