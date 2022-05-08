import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  fetchWithNewContact,
  fetchRemoveContact,
} from "./contactsAsyncThunk";

const initialState = {
  contacts: [],
  error: "",
  contactsLoader: false,
  addLoader: false,
  removeLoader: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        return { ...state, contactsLoader: true };
      })
      .addCase(fetchContacts.rejected, (state) => {
        return { ...state, contactsLoader: false, error: "No contacts Found" };
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        return { ...state, contacts: payload, contactsLoader: false };
      })

      .addCase(fetchWithNewContact.pending, (state, _) => {
        return { ...state, addLoader: true };
      })

      .addCase(fetchWithNewContact.rejected, (state, _) => {
        return { ...state, addLoader: false, error: "Something wrong!" };
      })
      .addCase(fetchWithNewContact.fulfilled, (state, { payload }) => {
        // console.log("payload", payload);
        return {
          ...state,
          contacts: [...state?.contacts, payload],
          addLoader: false,
        };
      })
      .addCase(fetchRemoveContact.pending, (state, _) => {
        return {
          ...state,
          removeLoader: true,
        };
      })
      .addCase(fetchRemoveContact.fulfilled, (state, { meta }) => {
        console.log("removeState", { ...state });
        console.log("payload", meta);
        return {
          ...state,
          contacts: state.contacts.filter((item) => item.id !== meta.arg),
          removeLoader: false,
        };
      })
      .addCase(fetchRemoveContact.rejected, (state, _) => {
        return {
          ...state,
          removeLoader: false,
        };
      });
  },
});

export default contactsSlice.reducer;
