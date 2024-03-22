import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('storageCartItems'))  || [],
  totalAmount: localStorage.getItem('storageTotalAmount') || 0,
  totalQuantity: localStorage.getItem('storageTotalQuantity') || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id == newItem.id
      );
      state.totalQuantity++;
      localStorage.setItem('storageTotalQuantity',state.totalQuantity)

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          Image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++,
          (existingItem.totalPrice =
            Number(existingItem.totalPrice) + Number(newItem.price));
      }
      const jsonCartItems = JSON.stringify(state.cartItems)
      localStorage.setItem('storageCartItems',jsonCartItems)

      state.totalAmount = state.cartItems.reduce(
        (total, item) => {
            return total + Number(item.price) * Number(item.quantity)
        },0
      );
      localStorage.setItem('storageTotalAmount',state.totalAmount )
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
