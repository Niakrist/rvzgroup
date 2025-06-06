import { createSlice } from "@reduxjs/toolkit";

export const forCommercialApplicationSlice = createSlice({
  name: "forCommercialApplication",
  initialState: {
    bearing: "",
  },
  reducers: {
    addInCommercialApplication: (state, action) => {
      state.bearing = action.payload;
    },
    clearCommercialApplication: (state) => {
      state.bearing = "";
    },
  },
});

export const { addInCommercialApplication, clearCommercialApplication } =
  forCommercialApplicationSlice.actions;

export default forCommercialApplicationSlice.reducer;
