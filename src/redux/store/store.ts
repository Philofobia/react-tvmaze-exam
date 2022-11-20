import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite.slice"; 

export const store =  configureStore({
    reducer: {
        favShow: favouriteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>