import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface iModalState {
  getPriceModal: boolean;
  isThanksModal: boolean;
  isFilterModal: boolean;
}

const initialState: iModalState = {
  getPriceModal: false,
  isThanksModal: false,
  isFilterModal: false,
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
    toggleOpenMobileFilter: (state, action: PayloadAction<boolean>) => {
      state.isFilterModal = action.payload;
    },
  },
});
export const { isGetPriceModal, toggleThanksModal, toggleOpenMobileFilter } =
  openModalSlice.actions;

export default openModalSlice.reducer;
