import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  fetchWithNewContact,
  fetchRemoveContact,
  fetchChangeContact,
} from "./contactsAsyncThunk";

const initialState = {
  contacts: [],
  error: "",
  contactsLoader: false,
  addLoader: false,
  removeLoader: false,
  changeLoader: false,
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
      .addCase(fetchRemoveContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          contacts: state.contacts.filter((item) => item.id !== payload),
          removeLoader: false,
        };
      })
      .addCase(fetchRemoveContact.rejected, (state, _) => {
        return {
          ...state,
          removeLoader: false,
        };
      })
      .addCase(fetchChangeContact.pending, (state, _) => {
        return {
          ...state,
          changeLoader: true,
        };
      })
      .addCase(fetchChangeContact.rejected, (state, _) => {
        return {
          ...state,
          changeLoader: false,
        };
      })
      .addCase(fetchChangeContact.fulfilled, (state, { payload }) => {
        console.log("payload", payload);
        console.log("state", state.contacts);
        return {
          ...state,
          contacts: state.contacts.map((contact) => {
            if (contact.id === payload.id) {
              return payload;
            }
            return contact;
          }),
          // contacts: state.contacts.splice(
          //   state.contacts.findIndex((contact) => contact.id === payload.id),
          //   1,
          //   payload
          // ),
          changeLoader: false,
        };
      });
  },
});

export default contactsSlice.reducer;
