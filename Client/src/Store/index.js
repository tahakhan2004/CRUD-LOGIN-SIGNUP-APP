import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartSlice";
import productSlice from "./productSlice";
// import AuthSlice from "./AuthSlice"
export const store = configureStore({
    reducer : {
      cart : cartSlice,  
      products : productSlice,
      // datum: AuthSlice,
    }
})
