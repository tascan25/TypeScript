import {createSlice} from "@reduxjs/toolkit"

const AuthSlice = createSlice({
    name:"Auth", 
    initialState:{
        isAuthenticated: false
    }, 
    reducers:{
        Login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

export const {Login,logout} = AuthSlice.actions; 
export default AuthSlice.reducer;