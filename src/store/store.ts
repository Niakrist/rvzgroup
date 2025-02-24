import { configureStore } from "@reduxjs/toolkit";
import bearingsSlice from "./bearingsSlice/bearingsSlice";
import openModalSlice from "./openModalSlice/openModalSlice";
import { useDispatch } from "react-redux";
import bearingItemSlice from "./bearingItemSlice/bearingItemSlice";

export const store = configureStore({
  reducer: {
    openModal: openModalSlice,
    bearingList: bearingsSlice,
    bearingItem: bearingItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
