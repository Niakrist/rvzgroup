import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IBearingListState {
  isLoadingBearingList: boolean;
  bearingList: [];
  errorBearingList: object | null;
}

const initialState: IBearingListState = {
  isLoadingBearingList: false,
  bearingList: [],
  errorBearingList: null,
};

export const fetchBearingList = createAsyncThunk(
  "bearingList/fetchBearingList",
  async () => {
    const response = await fetch("http://localhost:4000/api/v1/bearing");
    const data = await response.json();
    return data;
  }
);

const bearingsSlice = createSlice({
  name: "bearingList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBearingList.pending, (state) => {
        state.isLoadingBearingList = true;
        state.errorBearingList = null;
      })
      .addCase(fetchBearingList.fulfilled, (state, action) => {
        state.isLoadingBearingList = false;
        state.bearingList = action.payload;
      })
      .addCase(fetchBearingList.rejected, (state, action) => {
        state.isLoadingBearingList = false;
        state.errorBearingList = action.error;
      });
  },
});

export default bearingsSlice.reducer;
