import initialState from "./initialState";
import { CHANGE_TYPOGRAPHY_STYLES } from "./action-creators";

const typographyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TYPOGRAPHY_STYLES: {
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

export default typographyReducer;
