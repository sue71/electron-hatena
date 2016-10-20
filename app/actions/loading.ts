export class LoadingActionType {
  static LOADING_BEGIN = "LOADING_BEGIN";
  static LOADING_END = "LOADING_END";
}

export function showLoading() {
  return {
    type: LoadingActionType.LOADING_BEGIN
  };
}

export function dismissLoading() {
  return {
    type: LoadingActionType.LOADING_END
  };
}
