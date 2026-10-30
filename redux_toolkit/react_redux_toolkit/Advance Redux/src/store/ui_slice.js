import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    cartIsVisible: false
}

export const ui_slice = createSlice({
    name: 'ui_slice',
    initialState: INITIAL_STATE,
    reducers: {
      toogleCart(state, action){
        state.cartIsVisible = !state.cartIsVisible;
      },
    },
});

export const {toogleCart} = ui_slice.actions
export default ui_slice.reducer