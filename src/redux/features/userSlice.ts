import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

import { createUserAccount, logIn, logOut } from "../thunks";

const initialState: {
  user: User | null;
  status: "idle" | "loading" | "success" | "error";
} = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  status: "idle",
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserAccount.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      createUserAccount.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.status = "success";
        state.user = payload;
        localStorage.setItem("user", JSON.stringify(payload));
      }
    );
    builder.addCase(createUserAccount.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(logOut.pending, () => {});

    builder.addCase(logOut.fulfilled, (state) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(null));
    });

    builder.addCase(logOut.rejected, () => {});

    builder.addCase(logIn.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      logIn.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.status = "success";
        state.user = payload;
        localStorage.setItem("user", JSON.stringify(payload));
      }
    );
    builder.addCase(logIn.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const login = userSlice.reducer;
