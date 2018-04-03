import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import breadcrumbs from "../state/breadcrumbs/initialState";
import buttons from "../state/buttons/initialState";
import colors from "../state/colors/initialState";
import featured_icons from "../state/featured_icons/initialState";
import headers from "../state/headers/initialState";
import highlights from "../state/highlights/initialState";
import icons from "../state/icons/initialState";
import links from "../state/links/initialState";
import lists from "../state/lists/initialState";
import formComponent from "../state/form/initialState";
import logo from "../state/logo/initialState";
import sample_page from "../state/sample_page/initialState";
import quote from "../state/quote/initialState";
import table from "../state/table/initialState";
import typography from "../state/typography/initialState";

const reducers = combineReducers({
  breadcrumbs,
  buttons,
  colors,
  featured_icons,
  headers,
  highlights,
  icons,
  links,
  lists,
  logo,
  sample_page,
  quote,
  table,
  typography,
  formComponent,
  form: formReducer
});

export default reducers;
