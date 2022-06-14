import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  User,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services";
import { UserCredentials } from "../../types";

const initialState: {
  user: User | null;
  status: "idle" | "loading" | "success" | "error";
  coinsStored: { uuid: string; amount: number; avgPrice: number }[];
} = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  status: "idle",
  coinsStored: [],
};

export const logIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password }: UserCredentials, { getState }) => {
    try {
      const state: any = getState();
      if (state.login.user) throw new Error("User already logged in");
      const { user } = await signInWithEmailAndPassword(auth, email, password);
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
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addCoin: (
      state,
      action: PayloadAction<{ uuid: string; amount: number; avgPrice: number }>
    ) => {
      const coin = state.coinsStored.find(
        (coin) => coin.uuid === action.payload.uuid
      );
      if (coin) {
        coin.amount += action.payload.amount;
        coin.avgPrice =
          (coin.amount * coin.avgPrice +
            action.payload.avgPrice * action.payload.amount) /
          (coin.amount + action.payload.amount);
      } else {
        state.coinsStored.push(action.payload);
      }
    },
  },
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

    builder.addCase(logOut.pending, (state) => {});

    builder.addCase(logOut.fulfilled, (state) => {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(null));
    });

    builder.addCase(logOut.rejected, (state) => {});

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

export const {} = userSlice.actions;
