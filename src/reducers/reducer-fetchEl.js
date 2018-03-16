import { SELECT_EL } from "../actions";

export default (state, action) => {
  switch (action.type) {
    case SELECT_EL: {
      state = action.payload;
      break;
    }
    default:
      state = null;
  }
  return state;
};
