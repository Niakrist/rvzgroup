import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface iModalState {
  getPriceModal: boolean;
  isThanksModal: boolean;
}

const initialState: iModalState = {
  getPriceModal: false,
  isThanksModal: false,
};

const openModalSlice = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    isGetPriceModal: (state, action: PayloadAction<boolean>) => {
      state.getPriceModal = action.payload;
    },
    toggleThanksModal: (state, action: PayloadAction<boolean>) => {
      state.isThanksModal = action.payload;
    },
  },
});
export const { isGetPriceModal, toggleThanksModal } = openModalSlice.actions;

export default openModalSlice.reducer;
