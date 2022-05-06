import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  putContact,
  removeContact,
} from "service/axiosApiContacts";

const fetchContacts = createAsyncThunk("CONTACTS_FETCH", async () => {
  const res = await getContacts();
  return res;
});

const fetchWithNewContact = createAsyncThunk(
  "ADD_CONTACT_FETCH",
  async (contact, thunkApi) => {
    const res = await putContact(contact);
    return res;
  }
);

const fetchRemoveContact = createAsyncThunk(
  "REMOVE_CONTACT_FETCH",
  async (id) => {
    const res = await removeContact(id);
    return res;
  }
);

export { fetchContacts, fetchWithNewContact, fetchRemoveContact };
