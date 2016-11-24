export class AppActionType {
  static SHOW_DIALOG = "SHOW_DIALOG";
  static DISMISS_DIALOG = "DISMISS_DIALOG";
  static SHOW_EDITOR = "SHOW_EDITOR";
  static DISMISS_EDITOR = "DISMISS_EDITOR";
}

export enum DialogType {
}

export function showDialog(type: DialogType) {
  return {
    dialog: type,
    type: AppActionType.SHOW_DIALOG
  };
}

export function dismissDialog() {
  return {
    type: AppActionType.DISMISS_DIALOG
  };
}

export function showEditor() {
  return {
    type: AppActionType.SHOW_EDITOR
  };
}

export function dismissEditor() {
  return {
    type: AppActionType.DISMISS_EDITOR
  };
}
