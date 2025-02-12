import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface iModalState {
  getPriceModal: boolean;
  isThanksModal: boolean;
  isFilterModal: boolean;
  isMenuModal: boolean;
  isMenuBurger: boolean;
}

const initialState: iModalState = {
  getPriceModal: false,
  isThanksModal: false,
  isFilterModal: false,
  isMenuModal: false,
  isMenuBurger: false,
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
    toggleMenuModal: (state, action: PayloadAction<boolean>) => {
      state.isMenuModal = action.payload;
    },
    toggleMenuBurger: (state, action: PayloadAction<boolean>) => {
      state.isMenuBurger = action.payload;
    },
  },
});
export const {
  isGetPriceModal,
  toggleThanksModal,
  toggleOpenMobileFilter,
  toggleMenuModal,
  toggleMenuBurger,
} = openModalSlice.actions;

export default openModalSlice.reducer;
