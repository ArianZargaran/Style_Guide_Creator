import { combineReducers } from "redux";
import ListReducer from "./reducer-list";
import fetchElReducer from "./reducer-fetchEl";

const reducers = combineReducers({
  list: ListReducer,
  element: fetchElReducer
});

export default reducers;
