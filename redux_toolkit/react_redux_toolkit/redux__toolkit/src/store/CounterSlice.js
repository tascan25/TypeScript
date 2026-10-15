import { createSlice } from "@reduxjs/toolkit";

const intitalState = {
    counter: 0, 
    showCounter: true 
}

const counterSlice = createSlice({
    name:"counter", 
    initialState:intitalState,
    reducers:{
        increment(state){
            state.counter ++ ;
        }, 
        decrement(state){
            state.counter --;
        }, 
        increase(state,action){
            state.counter = state.counter + action.payload
        }, 
        toggle(state,action){
           state.showCounter =  !state.showCounter;
        }
    }
})

export const {increment, decrement, increase, toggle} = counterSlice.actions;
export default counterSlice.reducer;