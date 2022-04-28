import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem("Contacts")) || [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: JSON.parse(localStorage.getItem("Contacts")) || [],
  reducers: {
    addContact(state, action) {
      localStorage.setItem(
        "Contacts",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      const filterContacts = state.filter((elem) => {
        return elem.id !== action.payload;
      });
      localStorage.setItem("Contacts", JSON.stringify(filterContacts));
      return filterContacts;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
