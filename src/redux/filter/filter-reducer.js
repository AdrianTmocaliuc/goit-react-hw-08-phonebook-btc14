import { filterContacts } from "./filter-types";
import { createReducer } from "@reduxjs/toolkit";

const filterReducer = createReducer("", (builder) => {
  builder
    .addCase(filterContacts, (_, action) => {
      return action.payload;
    })
    .addDefaultCase((state, _) => state);
});

//---------------------- CLEAR REDUX----------------------------------
// function filterReducer(state = "", action) {
//   const { type, payload } = action;
//   switch (type) {
//     case filterContacts:
//       return payload;

//     default:
//       return state;
//   }
// }
//---------------------- CLEAR REDUX----------------------------------

export default filterReducer;
