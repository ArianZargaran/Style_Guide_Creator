import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./components/Router";

import "./styles/sgcreator/sgcreator-hook.css";
import "./styles/sgcreator/sgcreator-list.css";
import "./styles/sgcreator/sgcreator-section.css";
import "./styles/StyleGuide.css";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
