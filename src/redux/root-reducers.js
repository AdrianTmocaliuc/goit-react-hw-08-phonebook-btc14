import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsSlice from "./contacts/contactsAsyncSlice";
import filterSlice from "./filter/filter-slice";
import authorizationSlice from "./registration/authorizationAsyncSlice";

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token", "isAuth"],
};

const persistedReducer = persistReducer(persistConfig, authorizationSlice);

export default combineReducers({
  authorization: persistedReducer,
  items: contactsSlice,
  filter: filterSlice,
});
