import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./root-reducers";

import { getContacts } from "service/fetchApi";
import logger from "redux-logger";

const myMiddleware = (store) => (next) => (action) => {
  console.log("MyMiddleware", action);

  next(action); //give a next action 'logger'(.concat)
};

const gaMd = (store) => (next) => (action) => {
  console.log("MyMiddleware", action);

  next(action);
};

const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(
    // myMiddleware,
    logger
  );
};

const store = configureStore({
  reducer: combineReducers,
  // middleware: middleware,
  // devTools: false/true,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
