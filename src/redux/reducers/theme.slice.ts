import { createSlice } from "@reduxjs/toolkit";

export interface favSlice {
  theme: boolean;
}

const initalState: favSlice = {
  theme: true,
};

export const favouriteSlice = createSlice({
  name: "theme",
  initialState: initalState,
  reducers: {
    switchTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { switchTheme } = favouriteSlice.actions;
export default favouriteSlice.reducer;
