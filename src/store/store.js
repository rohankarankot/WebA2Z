import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import userSlice from "./features/userSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    cart: cartSlice,
  },
});
