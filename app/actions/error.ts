export class ErrorActionType {

  static API_FAILED = "API_FAILED";

}

export function createAPIError(error: Error) {
  return {
    type: ErrorActionType.API_FAILED,
    error: error
  };
}
