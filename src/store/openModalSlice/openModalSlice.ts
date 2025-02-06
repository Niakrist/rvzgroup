import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

interface iModalState {
  getPriceModal: boolean;
}

const initialState: iModalState = {
  getPriceModal: false,
};

const openModalSlice = createSlice({
  name: "openModal",
  initialState,
  reducers: {
    isGetPriceModal: (state, action: PayloadAction<boolean>) => {
      state.getPriceModal = action.payload;
    },
  },
});
export const { isGetPriceModal } = openModalSlice.actions;

export default openModalSlice.reducer;
