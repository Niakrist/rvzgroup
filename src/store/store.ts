import { configureStore } from "@reduxjs/toolkit";
import bearingsSlice from "./bearingsSlice/bearingsSlice";
import openModalSlice from "./openModalSlice/openModalSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    openModal: openModalSlice,
    bearingList: bearingsSlice,
  },
});
