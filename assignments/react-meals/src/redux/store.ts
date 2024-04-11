import { configureStore } from "@reduxjs/toolkit";
import OrdersReducer from "./orderSlice";

const store = configureStore({
    reducer : {
        orders: OrdersReducer
    }
})

export default store;
// Getting an given type for useSelector.
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
