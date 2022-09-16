import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productlist: [],
  calLength() {
    return this.productlist.length;
  },
};

const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    addCart(state, actions) {
      state.productlist = [...actions.payload];
    },
    removeCart(state) {},
  },
});

export const cartSliceAction = cartSlice.actions;
export default cartSlice;
