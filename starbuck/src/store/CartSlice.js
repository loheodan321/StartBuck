import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productlist: [],
  amount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart-slice",
  initialState,
  reducers: {
    addCart(state, actions) {
      //TÌM KIẾM NẾU NHƯ ITEM ĐÃ CÓ SẴN TRONG GIỎ HÀNG
      const findingItem = state.productlist.find(
        (item) => item.id === actions.payload.id
      );

      //NẾU NHƯ KHÔNG CÓ THÌ THÊM MỚI, AMOUNT++ VÀ TẠO RIÊNG MỘT AMOUT
      //CỦA ITEM ĐÓ
      if (!findingItem) {
        state.productlist = [...state.productlist, actions.payload];
        state.amount++;
        state.totalPrice += actions.payload.price;
      }

      //NẾU NHƯ CÓ RỒI THÌ CHỈ AMOUNT++ VÀ TOTALPRICE++
      else {
        state.productlist = [...state.productlist];
        state.amount++;
        state.totalPrice += actions.payload.price;
      }
    },
    removeCart(state, actions) {
      //TÌM KIẾM NẾU NHƯ ITEM ĐÃ CÓ SẴN TRONG GIỎ HÀNG
      const findingItem = state.productlist.find(
        (item) => item.id === actions.payload.id
      );
    },
  },
});

export const cartSliceAction = cartSlice.actions;
export default cartSlice;
