import { IBearing } from "@/types/bearing";
import { ICartItem } from "@/types/cartItem.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
  cart: ICartItem[];
}

const loadCartFromLocalStorage = (): ICartState => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return initialState;
};

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
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
      state.cart = state.cart.map((item) => {
        if (item.product.id === action.payload.product.id) {
          item.count = item.count - 1;
          return item;
        } else {
          console.log("-");

          return item;
        }
      });
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
  },
});

export const { addToCart, changeInCart, decrementCart, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
