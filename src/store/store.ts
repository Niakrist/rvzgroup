import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bearingsSlice from "./bearingsSlice/bearingsSlice";
import openModalSlice from "./openModalSlice/openModalSlice";
import { useDispatch } from "react-redux";
import bearingItemSlice from "./bearingItemSlice/bearingItemSlice";
import filterSlice from "./filterSlice/filterSlice";
import cartSlice from "./cartSlice/cartSlice";
import { cartLocalStorageMiddleware } from "@/middleware/cartLocalStorageMiddleware";

const rootReducer = combineReducers({
  openModal: openModalSlice,
  bearingList: bearingsSlice,
  bearingItem: bearingItemSlice,
  filters: filterSlice,
  cart: cartSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartLocalStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
