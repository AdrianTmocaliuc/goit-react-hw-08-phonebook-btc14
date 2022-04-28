import { combineReducers } from "redux";
// import contactsReducer from "./contacts/contacts-reducer";
// import filterReducer from "./filter/filter-reducer";
import contactsSlice from "./contacts/contacts-slice/contacts-slice";
import filterSlice from "./filter/filter-slice/filter-slice";

export default combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});
