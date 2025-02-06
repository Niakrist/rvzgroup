import { configureStore } from "@reduxjs/toolkit";
import openModalSlice from "./openModalSlice/openModalSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: { openModal: openModalSlice },
});
