import * as React from "react";
import { render } from "react-dom";
import { hashHistory, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from "react-redux";

(window as any).React = React;

import routes from "./routes";
import configureStore from "./stores";

require("./index.html");
require("style?useable!normalize.css");

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById("root")
)
