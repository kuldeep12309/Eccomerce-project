import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((it) => it.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((it) => it.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementItem: (state, action) => {
      const item = state.items.find((it) => it.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    dedcrementItem: (state, action) => {
      const item = state.items.find((it) => it.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((it) => it.id !== action.payload);
      }
    },
  },
});

export const {
  addToCart,
  removeCart,
  clearCart,
  incrementItem,
  dedcrementItem,
} = cartSlice.actions;
export default cartSlice.reducer;
