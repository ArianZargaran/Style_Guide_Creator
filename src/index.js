import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./components/Router";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neo.css";

import "./style/Index.css";
import "./style/Categories.css";
import "./style/Section.css";
import "./style/Download.css";
import "./style/Codemirror.css";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
