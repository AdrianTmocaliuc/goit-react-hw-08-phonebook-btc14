import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./root-reducers";

const store = configureStore({
  reducer: combineReducers,
  // middleware: middleware,
  // devTools: false/true,
  // devTools: process.env.NODE_ENV === "development",
});

export default store;
