import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../services";
import { UserCredentials } from "../../types";

export const logIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password }: UserCredentials) => {
    try {
      // const { user } = await signInWithEmailAndPassword(auth, email, password);
      const user = {};
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const createUserAccount = createAsyncThunk(
  "user/createUserAccount",
  async ({ email, password }: UserCredentials) => {
    try {
      // const { user } = await createUserWithEmailAndPassword(
      //   auth,
      //   email,
      //   password
      // );
      const user = {};

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  try {
    // signOut(auth);
  } catch (error) {
    console.error(error);
    throw error;
  }
});
