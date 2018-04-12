import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./components/Router";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "./style/sgcreator-hook.css";
import "./style/sgcreator-categories.css";
import "./style/sgcreator-section.css";
import "./style/sgcreator-css.css";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
