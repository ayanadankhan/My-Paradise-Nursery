// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // If item exists, increment quantity
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with initial quantity of 1
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = action.payload;
      state.items.splice(itemIndex, 1); // Remove item from the cart by index
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increase the quantity
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Decrease the quantity
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
