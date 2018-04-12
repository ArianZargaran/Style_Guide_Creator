import initialState from "./initialState";
import { FETCH_APP_ID } from "./action-creators";

const appId = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APP_ID: {
      state = { ...action.payload, prefix: action.payload.prefix };
      break;
    }
    default:
      return state;
  }
  return state;
};

export default appId;
