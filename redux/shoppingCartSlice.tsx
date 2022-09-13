import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "interfaces";

export interface shoppingCartState {
  value: Array<ProductInterface>;
}

const initialState: shoppingCartState = { value: [] };

export const shoppingCartSlice = createSlice({
  name: "shoppingcart",
  initialState,

  reducers: {
    addProduct: (state, action: PayloadAction<ProductInterface>) => {
      state.value.concat(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<ProductInterface>) => {
      state.value.filter(
        (shoppingCartItem) => shoppingCartItem.id !== action.payload.id
      );
    }
  }
});

export const { addProduct, deleteProduct } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
