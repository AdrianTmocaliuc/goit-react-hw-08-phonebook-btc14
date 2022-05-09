import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const RegisterUser = createAsyncThunk(
  "register",
  async (contact, thunkApi) => {
    try {
      const res = await axios({
        method: "POST",
        url: "/users/signup",
        data: contact,
      });
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      alert(`Incorrect Data`);
      return thunkApi.rejectWithValue();
    }
  }
);

export const LoginUser = createAsyncThunk(
  "login",
  async (contact, thunkApi) => {
    try {
      const res = await axios.post("/users/login", contact);
      token.set(res.data.token);
      const state = thunkApi.getState();

      // thunkApi.getState();
      // return state.Authorization.token === res.data.token ? "ok" : res.data;
      return res.data;
    } catch (error) {
      alert(`Incorrect "Email" or "Password"`);

      return thunkApi.rejectWithValue();
    }
  }
);

export const currentUser = createAsyncThunk("refresh", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();

    token.set(state.authorization.token);

    const res = await axios.get("/users/current");
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue();
  }
});

export const logOutUser = createAsyncThunk("logOut", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");

    token.unset();
  } catch (error) {
    return thunkApi.rejectWithValue();
    // return console.log("Error", error);
  }
});
