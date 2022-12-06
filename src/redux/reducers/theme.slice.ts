import { createSlice } from "@reduxjs/toolkit";

export interface favSlice {
  theme: string;
}

const initalState: favSlice = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initalState,
  reducers: {
    switchTheme: (state) => {
      if (state.theme === "light") state.theme = "dark"
      else state.theme = "light"
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
