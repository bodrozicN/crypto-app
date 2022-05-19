import { createSlice } from "@reduxjs/toolkit";
import { toggle } from "../actions";

const initialState: {
  isDark: boolean;
} = {
  isDark: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: toggle,
  },
});

export const theme = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
