import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, putContact, removeContact } from "service/axiosApi";

const fetchContacts = createAsyncThunk("CONTACTS_FETCH", async () => {
  const res = await getContacts();
  return res;
});

const fetchWithNewContact = createAsyncThunk("ADD_CONTACT_FETCH", async () => {
  const res = await putContact();
  return res;
});

const FetchRemoveContact = createAsyncThunk(
  "REMOVE_CONTACT_FETCH",
  async (id) => {
    const res = await removeContact(id);
    return res;
  }
);

export { fetchContacts, fetchWithNewContact, FetchRemoveContact };
