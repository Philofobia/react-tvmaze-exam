import { configureStore } from "@reduxjs/toolkit";
import theme from "../reducers/theme.slice"; 

export const store =  configureStore({
    reducer: {
        theme: theme
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>