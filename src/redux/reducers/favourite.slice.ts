import { createSlice } from "@reduxjs/toolkit";
import { searchMovieBool } from "../../services/models";

export type favSlice = searchMovieBool[];
const initalState: searchMovieBool[] = [];

export const favouriteSlice = createSlice({
    name: "favouriteShows",
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
