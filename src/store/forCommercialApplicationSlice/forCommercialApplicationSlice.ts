import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/types/cartItem.interface";

interface ICPState {
  bearing: ICartItem[];
}

const initialState: ICPState = {
  bearing: [],
};

export const forCommercialApplicationSlice = createSlice({
  name: "forCommercialApplication",
  initialState,
  reducers: {
    addInCommercialApplication: (state, action: PayloadAction<ICartItem>) => {
      state.bearing.push(action.payload);
    },
    clearCommercialApplication: (state) => {
      state.bearing = [];
    },
  },
});

export const { addInCommercialApplication, clearCommercialApplication } =
  forCommercialApplicationSlice.actions;

export default forCommercialApplicationSlice.reducer;
