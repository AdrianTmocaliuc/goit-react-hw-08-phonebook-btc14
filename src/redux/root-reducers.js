import { combineReducers } from "redux";

import contactsSlice from "./contacts/contactsAsyncSlice";
import filterSlice from "./filter/filter-slice";

export default combineReducers({
  items: contactsSlice,
  // filter: filterSlice,
});
