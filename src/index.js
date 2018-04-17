import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./components/Router";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";

import "./style/sgcreator-hook.css";
import "./style/sgcreator-categories.css";
import "./style/sgcreator-section.css";
import "./style/sgcreator-css.css";
import "./style/sgcreator-tag-box.css";
import "./style/Index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
