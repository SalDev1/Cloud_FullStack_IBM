import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IOrder from "../model/order";
import data from "../model/dishes_data";

type OrderType = {
    orders : IOrder[],
}

const initialState : OrderType = {
    orders : [],
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState : initialState,
    reducers : {
        addToCart : (state , action) => {
            const exists = state.orders.some((o) => o.dish_name === action.payload.dish_name)
            if(!exists) {
               state.orders = [...state.orders, action.payload]
            }
            else {
                /*
                  Remember this logic.

                  When you want to make specific changes in the object , use the 
                  spread operator to reflect the new changes made in the existing 
                  object and reinitialize the array with the updated changes.
                */
               const idx = state.orders.findIndex((o) => o.dish_name === action.payload.dish_name);
               state.orders[idx].quantity += 1
               state.orders = [...state.orders]
            }
        },
        incrementOrder : (state,action) => {
            const idx = state.orders.findIndex((o) => o.dish_name === action.payload)
            state.orders[idx].quantity += 1
            state.orders = [...state.orders]
        },
        decrementOrder : (state,action) => {
            const idx = state.orders.findIndex((o) => o.dish_name === action.payload)
            state.orders[idx].quantity -= 1;

            if(state.orders[idx].quantity === 0) {
                const new_orders = state.orders.filter((o) => o.dish_name !== action.payload)
                state.orders = new_orders
            }
            else {
                state.orders = [...state.orders]
            }
        }
    },
})

export const {addToCart,incrementOrder,decrementOrder} = ordersSlice.actions;
export default ordersSlice.reducer;


