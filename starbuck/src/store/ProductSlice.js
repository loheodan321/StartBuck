import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product-slice",
  initialState: {
    data: {
      id: "",
      name: "",
      price: 0,
      imgLink: "",
      description: "This is description",
    },
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },

    removeProduct(state) {
      state.data = null;
    },
  },
});

export const productAction = productSlice.actions;

export default productSlice;
