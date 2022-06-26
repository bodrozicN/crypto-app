import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../services";
import { UserCredentials } from "../../types";

export const logIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password }: UserCredentials, { getState }) => {
    try {
      const state: any = getState();
      if (state.login.user) throw new Error("User already logged in");
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome back");
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const createUserAccount = createAsyncThunk(
  "user/createUserAccount",
  async ({ email, password }: UserCredentials, { getState }) => {
    const state: any = getState();
    try {
      if (state.login.user) throw new Error("User is already logged in");
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Account created");
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  try {
    signOut(auth);
    alert("Logged out");
  } catch (error) {
    console.log(error);
    throw error;
  }
});
