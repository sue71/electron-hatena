import { assign } from "lodash";
import {AppActionType} from "../actions/app";

export interface AppState {
  dialog: string;
}

const initialState = {
  dialog: null
}

export default function articles(state: AppState = initialState, action: any): AppState {
  switch (action.type) {
    case AppActionType.SHOW_DIALOG:
      return assign({}, state, {
        dialog: action.dialog
      });
    case AppActionType.DISMISS_DIALOG:
      return assign({}, state, {
        dialog: null
      });
    default:
      return state;
  }
}
