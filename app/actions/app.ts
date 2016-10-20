export class AppActionType {
  static SHOW_DIALOG = "SHOW_DIALOG";
  static DISMISS_DIALOG = "DISMISS_DIALOG";
}

export function showDialog(name) {
  return {
    dialog: name,
    type: AppActionType.SHOW_DIALOG
  };
}

export function dismissDialog() {
  return {
    type: AppActionType.DISMISS_DIALOG
  };
}

