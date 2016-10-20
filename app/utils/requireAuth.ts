export function requireAuth(nextState, replace, callback) {
  const token = localStorage.getItem("token");

  if (!token) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname }
    });
  }

  callback();
}
