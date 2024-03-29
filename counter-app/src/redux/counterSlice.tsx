import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";


// define the type.
type AppStateType = {
    counter : number,
    error : boolean
}

const initialState : AppStateType = {
    counter : 0,
    error : false
}

const counterSlice = createSlice({
    name:'counter',
    initialState : initialState,
    reducers : {
        setIncrement: (state, action) => {
            state.counter += action.payload
        },
        setDecrement : (state,action) => {
            state.counter -= action.payload
        },
        setIncrementBy10 : (state,action) => {
            state.counter += action.payload;
        }
    }
})

export const {setIncrement , setDecrement , setIncrementBy10} = counterSlice.actions;
export default counterSlice.reducer;