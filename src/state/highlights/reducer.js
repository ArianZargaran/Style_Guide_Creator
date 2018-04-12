import initialState from "./initialState";
import { CHANGE_HIGHLIGHTS_STYLES } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HIGHLIGHTS_STYLES: {
      return {
        style: {
          ...state.style,
          ...action.payload
        }
      };
    }
    default:
      return { ...state };
  }
};
