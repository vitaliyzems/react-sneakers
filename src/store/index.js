import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import products from "./productsSlice";
import fav from "./favSlice";
import order from "./orderSlice";

export const store = configureStore({
  reducer: { products: products, cart: cart, fav: fav, order: order },
});
