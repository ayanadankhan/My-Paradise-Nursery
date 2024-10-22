// src/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aromaticPlants: [],
  otherPlants: [],
  airPurifyingPlants: [],
  decorativePlants: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAromaticPlants: (state, action) => {
      state.aromaticPlants = action.payload;
    },
    setOtherPlants: (state, action) => {
      state.otherPlants = action.payload;
    },
    setAirPurifyingPlants: (state, action) => {
      state.airPurifyingPlants = action.payload;
    },
    setDecorativePlants: (state, action) => {
      state.decorativePlants = action.payload;
    },
  },
});

export const { setAromaticPlants, setOtherPlants, setAirPurifyingPlants, setDecorativePlants } = productSlice.actions;
export default productSlice.reducer;
