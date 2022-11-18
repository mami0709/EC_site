import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import  productsReducer  from "./slice/.products"
import  cartReducer  from "./slice/cart"


export const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
  },
});
