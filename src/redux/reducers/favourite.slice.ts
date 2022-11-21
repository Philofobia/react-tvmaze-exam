import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchMovieBool } from "../../services/models";

export interface favSlice {
  favShows: searchMovieBool;
}
const initalState: favSlice = {
  favShows: {
    favourite: false,
    show: {
      id: 0,
      name: "",
      language: "",
      genres: [],
      rating: { average: 0 },
      image: { medium: "" },
      summary: "",
    },
  },
};

export const favouriteSlice = createSlice({
  name: "favouriteShows",
  initialState: initalState,
  reducers: {
    getShows: (state, action: PayloadAction<any>) => {
        state.favShows = action.payload;
    },
    addShow: (state, action) => {},
    removeShow: (state, action) => {},
  },
});

export const { addShow, removeShow, getShows } = favouriteSlice.actions;
export default favouriteSlice.reducer;
