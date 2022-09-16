import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

import productSlice from "./ProductSlice";
const Store = configureStore({
  reducer: { productSlice: productSlice.reducer, cartSlice: cartSlice.reducer },
});

export default Store;
