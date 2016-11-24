import { assign } from "lodash";
import {AppActionType} from "../actions/app";

export interface AppState {
  dialog: string;
  showEditor: Boolean;
}

const initialState = {
  dialog: null,
  showEditor: false
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
    case AppActionType.SHOW_EDITOR:
      return assign({}, state, {
        dialog: null,
        showEditor: true
      });
    case AppActionType.DISMISS_EDITOR:
      return assign({}, state, {
        dialog: null,
        showEditor: false
      });
    default:
      return state;
  }
}
