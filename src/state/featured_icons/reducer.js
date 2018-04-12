import initialState from "./initialState";
import { CHANGE_FICONS_STYLES } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FICONS_STYLES:
      return {
        style: {
          ...state.style,
          ...action.payload
        }
      };
    default:
      return { ...state };
  }
};
