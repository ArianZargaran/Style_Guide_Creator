import initialState from "./initialState";
import { FETCH_APP_NAME } from "./action-creators";

const setUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APP_NAME: {
      state = action.payload;
      break;
    }
    default:
      return state;
  }
  return state;
};

export default setUpReducer;
