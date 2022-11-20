import { createSlice } from "@reduxjs/toolkit";
import { searchMovieBool } from "../../services/models";

export interface favSlice {
    favShows: searchMovieBool[];
}
const initalState = {
    favShows: []
}

export const favouriteSlice = createSlice({
    name: "favourite shows",
    initialState: initalState,
    reducers: {
        addShow: () => {

        },
        removeShow: () => {

        }
    }
})

export const { addShow, removeShow } = favouriteSlice.actions;
export default favouriteSlice.reducer;
