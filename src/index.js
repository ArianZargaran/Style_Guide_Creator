import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./components/Router";

import "./style/sgcreator/sgcreator-hook.css";
import "./style/sgcreator/sgcreator-categories.css";
import "./style/sgcreator/sgcreator-section.css";
import "./style/Root.css";
// import "./style/style-guide.css";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
