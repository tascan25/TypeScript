import {configureStore} from "@reduxjs/toolkit";
import authSliceReducer from './AuthSlice'
import counterSliceReducer from './CounterSlice'






const store = configureStore({
    reducer: {counter:counterSliceReducer,auth:authSliceReducer}
}); 



export default store


