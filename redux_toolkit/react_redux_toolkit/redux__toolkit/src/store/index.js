import {createSlice} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";

const intitalState = {
    counter: 0, 
    showCounter: true 
}

const counterSlice = createSlice({
    name:"counter", 
    intitalState: intitalState, 
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


const store = configureStore({
    reducer: counterSlice.reducer
}); 

export const {increment, decrement, increase, toggle} = counterSlice.actions;

export default store


