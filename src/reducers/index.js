import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import breadcrumbs from "../state/breadcrumbs/reducer";
import buttons from "../state/buttons/reducer";
import colors from "../state/colors/reducer";
import featured_icons from "../state/featured_icons/reducer";
import headers from "../state/headers/reducer";
import highlights from "../state/highlights/reducer";
import icons from "../state/icons/reducer";
import links from "../state/links/reducer";
import lists from "../state/lists/reducer";
import formComponent from "../state/form/reducer";
import logo from "../state/logo/reducer";
import sample_page from "../state/sample_page/reducer";
import quote from "../state/quote/reducer";
import table from "../state/table/reducer";
import typography from "../state/typography/reducer";
import appId from "../state/app_id/reducer";

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
  appId,
  form: formReducer
});

export default reducers;
