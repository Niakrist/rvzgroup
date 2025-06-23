import { IBearing } from "@/types/bearing";
import { ICartItem } from "@/types/cartItem.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
  cart: ICartItem[];
}

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initialCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cart = action.payload;
    },
    addToCart: (
      state,
      action: PayloadAction<{ product: IBearing; count: number }>
    ) => {
      const findProduct = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (findProduct) {
        findProduct.count += action.payload.count;
      } else {
        state.cart.push({
          product: action.payload.product,
          count: action.payload.count,
        });
      }
    },
    decrementCart: (state, action: PayloadAction<{ product: IBearing }>) => {
      const item = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (item) {
        item.count--;
      }
    },
    changeInCart: (
      state,
      action: PayloadAction<{ product: IBearing; count: number }>
    ) => {
      const findProduct = state.cart.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (findProduct) {
        findProduct.count = action.payload.count;
      }
    },
    deleteFromCart: (state, action: PayloadAction<{ product: IBearing }>) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== action.payload.product.id;
      });
    },
    removeCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  changeInCart,
  decrementCart,
  deleteFromCart,
  initialCart,
  removeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
