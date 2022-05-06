import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import combineReducers from "./root-reducers";

// const persistConfig = {
//   key: "register",
//   storage,
//   whitelist: ["register"],
// };

// const persistedReducer = persistReducer(persistConfig, combineReducers);

const store = configureStore({
  reducer: combineReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // devTools: false/true,
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

export default store;
