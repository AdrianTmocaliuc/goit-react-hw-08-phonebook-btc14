import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getContacts,
  putContact,
  removeContact,
  changeContact,
} from "service/axiosApiContacts";

const fetchContacts = createAsyncThunk("contacts", async () => {
  const res = await getContacts();
  return res;
});

const fetchWithNewContact = createAsyncThunk(
  "addContact",
  async (contact, thunkApi) => {
    const res = await putContact(contact);
    return res;
  }
);

const fetchRemoveContact = createAsyncThunk("removeContact", async (id) => {
  await removeContact(id);
  return id;
});

const fetchChangeContact = createAsyncThunk(
  "changeContact",
  async (contact) => {
    const res = await changeContact(contact);

    return res;
  }
);

export {
  fetchContacts,
  fetchWithNewContact,
  fetchRemoveContact,
  fetchChangeContact,
};
