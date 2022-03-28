import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: true,
  cartItems: {
    "Test Item": {
      amount: 3,
      price: 6.0,
    },
  },
};
/*
* cartItem 
itemId
price
amount
*/

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const itemId = action.payload.itemId;
      if (state.cartItems[itemId]) {
        state.cartItems[itemId].amount++;
      } else {
        state.cartItems[itemId] = {
          amount: 1,
          price: action.payload.price,
        };
      }
    },
    increaseAmount(state, action) {
      const itemId = action.payload.itemId;
      state.cartItems[itemId].amount++;
    },
    decreaseAmount(state, action) {
      const itemId = action.payload.itemId;
      if (state.cartItems[itemId].amount === 1) {
        delete state.cartItems[itemId];
      } else {
        state.cartItems[itemId].amount--;
      }
    },
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

export default cartSlice;
