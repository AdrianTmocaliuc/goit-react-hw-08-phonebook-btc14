import { createSlice } from "@reduxjs/toolkit";
import {
  RegisterUser,
  LoginUser,
  currentUser,
  logOutUser,
} from "./authorizationAsyncThunk";

const initialState = {
  token: "",
  isAuth: false,
  user: {
    name: "",
    email: "",
  },
  authLoader: false,
};

const authorizationSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        return { ...state, authLoader: true };
      })
      .addCase(RegisterUser.rejected, (state) => {
        return { ...state, authLoader: false };
      })
      .addCase(RegisterUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          token: payload.token,
          user: payload.user,
          authLoader: false,
          isAuth: true,
        };
      })
      .addCase(LoginUser.pending, (state) => {
        return { ...state, authLoader: true };
      })
      .addCase(LoginUser.rejected, (state) => {
        return { ...state, authLoader: false };
      })
      .addCase(LoginUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          token: payload.token,
          user: payload.user,
          authLoader: false,
          isAuth: true,
        };
      })
      .addCase(currentUser.pending, (state) => {
        return { ...state, authLoader: true };
      })
      .addCase(currentUser.rejected, (state) => {
        return { ...state, authLoader: false };
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          user: { ...state.user, name: payload.name, email: payload.email },
          authLoader: false,
          isAuth: true,
        };
      })
      .addCase(logOutUser.pending, (state) => {
        return { ...state, authLoader: true };
      })
      .addCase(logOutUser.rejected, (state) => {
        return { ...state, authLoader: false };
      })
      .addCase(logOutUser.fulfilled, () => {
        return initialState;
      });
  },
});

export default authorizationSlice.reducer;
