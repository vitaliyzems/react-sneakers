import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
    isOpen: false,
  },
  reducers: {
    addItem(state, action) {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        state.total += itemInCart.price;
        itemInCart.quantity++;
        return;
      }
      const item = { ...action.payload, quantity: 1 };
      state.total += item.price;
      state.cart.push(item);
    },
    removeItem(state, action) {
      const { id, price, quantity } = action.payload;
      if (quantity === 1) {
        state.total -= price;
        state.cart = state.cart.filter((item) => item.id !== id);
        return;
      }
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          item.quantity--;
          state.total -= price;
        }
        return item;
      });
      // const cart = state.cart.filter((item) => item.id !== id);
      // state.total -= price * quantity;
      // state.cart = cart;
    },
    clearCart(state) {
      state.cart = [];
      state.total = 0;
    },
    openCart(state) {
      state.isOpen = true;
    },
    closeCart(state) {
      state.isOpen = false;
    },
  },
});

export const { addItem, removeItem, clearCart, openCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
