import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from './ui_slice'
import cartSliceReducer from './cart_slice';

export const store = configureStore({
    reducer:{ui:uiSliceReducer,cart:cartSliceReducer}
})