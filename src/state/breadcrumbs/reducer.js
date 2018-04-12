import initialState from "./initialState";
import { CHANGE_BREADCRUMBS_STYLES } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BREADCRUMBS_STYLES: {
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
