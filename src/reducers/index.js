import { combineReducers } from "redux";
import ListReducer from "./reducer-list";

const reducers = combineReducers({
  list: ListReducer
});

export default reducers;
