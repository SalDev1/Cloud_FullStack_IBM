import { configureStore } from "@reduxjs/toolkit";
import CounterListener from "./counterSlice";

const store = configureStore({
    reducer : {
        counter : CounterListener,
    }
})
export type AppDispatch = typeof store.dispatch
export default store

export type RootType = ReturnType<typeof store.getState>