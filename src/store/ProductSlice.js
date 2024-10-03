import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Product: [],
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    getdata: (state, action) => {
      state.Product = action.payload;
    },
    removeProduct: (state, action) => {
      state.Product = state.Product.filter(item => item.id !== action.payload);
    },
  },
});


export const { getdata, removeProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
