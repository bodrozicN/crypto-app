import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { cryptoApi } from "./api";
import { theme, login } from "./features";

export const store = configureStore({
  reducer: {
    theme: theme,
    login: login,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
