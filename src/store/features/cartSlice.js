import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  reducers: {
    addProduct(state, action) {
      const exisitingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (exisitingItem) {
        exisitingItem.qty += 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          qty: 1,
          price: action.payload.price,
          image: action.payload.image,
        });
      }
    },

    removeFromCart(state, action) {
      state.cartItems.filter((item) => item.id !== action.payload.id);
    },

    emptyCart(state) {
      state.cartItems = [];
    },

    updateQuantity(state, action) {
      const { id, qty } = action;
      const exisitingItem = state.cartItems.find((item) => item.id === id);
      if (exisitingItem) exisitingItem.qty = qty;
    },
  },
  name: "cart",
  initialState: {
    cartItems: [],
  },
});

export const { addProduct, removeFromCart, emptyCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
