// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
