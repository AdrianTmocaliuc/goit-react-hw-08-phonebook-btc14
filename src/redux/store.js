import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./root-reducers";

const store = createStore(combineReducers, composeWithDevTools());

export default store;
