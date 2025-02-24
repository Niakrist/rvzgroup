import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { IBearing } from "@/types/types";

interface IBearingListState {
  isLoadingBearingList: boolean;
  bearingList: IBearing[] | [];
  count: number;
  errorBearingList: SerializedError | null;
}

const initialState: IBearingListState = {
  isLoadingBearingList: false,
  bearingList: [],
  count: 0,
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
        state.bearingList = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchBearingList.rejected, (state, action) => {
        state.isLoadingBearingList = false;
        state.errorBearingList = action.error;
      });
  },
});

export default bearingsSlice.reducer;
