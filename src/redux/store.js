import { configureStore } from "@reduxjs/toolkit";
// import { createStore, } from "redux";
// import { composeWithDevTools ,  } from "redux-devtools-extension";
import combineReducers from "./root-reducers";

const store = configureStore({
  reducer: combineReducers,
  //   devTools: process.env.NODE_ENV !== "development",
});

export default store;
