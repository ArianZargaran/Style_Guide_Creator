import initialState from "./initialState";
import { CHANGE_FORM_STYLES } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_STYLES: {
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
