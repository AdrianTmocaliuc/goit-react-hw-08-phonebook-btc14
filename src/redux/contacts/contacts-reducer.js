import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./contacts-types";

const initialState = JSON.parse(localStorage.getItem("Contacts")) || [];

const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      localStorage.setItem(
        "Contacts",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter((elem) => {
        return elem.id !== action.payload;
      });
    });
});

//---------------------- CLEAR REDUX----------------------------------
// function contactsReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case addContact:
//       localStorage.setItem("Contacts", JSON.stringify([...state, payload]));
//       return [...state, payload];

//     case deleteContact:
//       console.log("state", state);
//       return state.filter((elem) => {
//         return elem.id !== payload;
//       });

//     default:
//       return initialState;
//   }
// }
//---------------------- CLEAR REDUX----------------------------------

export default contactsReducer;
