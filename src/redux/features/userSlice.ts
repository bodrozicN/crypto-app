import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import { createUserAccount, logIn, logOut } from "../thunks";

const initialState: {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
} = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  isError: false,
  isLoading: false,
  isSuccess: false,
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserAccount.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(
      createUserAccount.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.user = payload;
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
        localStorage.setItem("user", JSON.stringify(payload));
      }
    );
    builder.addCase(createUserAccount.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    });

    builder.addCase(logOut.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });

    builder.addCase(logOut.fulfilled, (state) => {
      state.user = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = true;
      localStorage.setItem("user", JSON.stringify(null));
    });

    builder.addCase(logOut.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    });

    builder.addCase(logIn.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(
      logIn.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.user = payload;
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        localStorage.setItem("user", JSON.stringify(payload));
      }
    );
    builder.addCase(logIn.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

export const login = userSlice.reducer;
