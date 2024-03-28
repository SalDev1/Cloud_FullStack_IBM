import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import IProduct from "../model/product";
import httpClient from "../apiClient/httpClient";


// Middleare for handling all asynchoronus operations.
// export const fetchProducts = createAsyncThunk<IProduct[]>("products/list", 
//   async() => await httpClient.get(`http://localhost:4200/products`))

// Taking the input as string and return IProduct[] array.
export const fetchProducts = createAsyncThunk<IProduct[],string>("products/search", 
  async(searchKey:string="") => await httpClient.get(`http://localhost:4200/products?productName=${searchKey}`))


type AppStateType = {
    products: IProduct[],
    error:boolean,
    searchKey:string,
}

// Initializing type of AppStateType.
const initialState : AppStateType = {
    products:[],
    error:false,
    searchKey:"",
}
/*
  Because of Slice , we also export the reducers as well.
*/
export const productListSlice = createSlice({
    name:'products',
    initialState: initialState,
    reducers:{
        // We are setting the search key from action.payload.
        setSearchKey: (state,action) => {
            state.searchKey = action.payload
        }
    },
    extraReducers: (builder)=> {
        // It helps you to look for different promise state , 
        // to check whether the promise is resolved or rejected.
        // This is where we aim to go and fetch

        // it resolves createAsyncThunks.
        builder.addCase(fetchProducts.fulfilled , 
            (state,action) => {state.products = action.payload})

        builder.addCase(fetchProducts.rejected , (state) =>{state.error = true})
    }
})

export const {setSearchKey} = productListSlice.actions
export default productListSlice.reducer