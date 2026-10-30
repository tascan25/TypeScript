import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items: [], 
    totalQuantity: 0
}

const cart_slice  =  createSlice({
    name:"cart", 
    initialState: INITIAL_STATE, 
    reducers:{
        addToCart(state,action){
            const itemToAdd = action.payload.item

            const checkItem = state.items.find((item)=>item.id===itemToAdd.id);

            if (checkItem){
                checkItem.totalPrice = checkItem.totalPrice + itemToAdd.price; 
                checkItem.quantity = checkItem.quantity + 1 
                state.totalQuantity++
            }
            else{
                 state.items.push({
                    id: itemToAdd.id, 
                    price: itemToAdd.price,
                    quantity: 1,
                    totalPrice: itemToAdd.price, 
                    name: itemToAdd.title
                 })
                 state.totalQuantity++
            }
        },

        removeFromCart(state,action){
            const removeItemId = action.payload.id; 

            const checkItem = state.items.find((item)=>item.id === removeItemId);

            if(checkItem.quantity === 1){
                state.items = state.items.filter((item)=>item.id !== removeItemId);
                state.totalQuantity--
            }
            else{
                checkItem.quantity = checkItem.quantity - 1
                checkItem.totalPrice = checkItem.totalPrice - checkItem.price
                state.totalQuantity--
            }
        }
    }
})

const sendCartData = (cart)=>{
    return async (dispatch)=>{
         const response = await fetch(
      "https://react-redux-e711c-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  };
    }
}
export const {addToCart,removeFromCart} = cart_slice.actions;

export default cart_slice.reducer