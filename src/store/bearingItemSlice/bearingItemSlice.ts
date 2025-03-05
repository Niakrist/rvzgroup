import { IBearing } from "@/types/types";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

interface IBearingItemSlice {
  loadingBearingItem: boolean;
  bearingItem: null | IBearing;
  errorBearingItem: SerializedError | null;
}

const initialState: IBearingItemSlice = {
  loadingBearingItem: false,
  bearingItem: null,
  errorBearingItem: null,
};

export const fetchBbearingItem = createAsyncThunk(
  "bearingItem/fetchBbearingItem",
  async (url: string) => {
    const response = await fetch(`http://localhost:4000/api/v1/bearing/${url}`);
    const data = await response.json();
    return data;
  }
);

const bearingItemSlice = createSlice({
  name: "bearingItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBbearingItem.pending, (state) => {
        state.loadingBearingItem = true;
        state.errorBearingItem = null;
      })
      .addCase(fetchBbearingItem.fulfilled, (state, action) => {
        state.loadingBearingItem = false;
        state.bearingItem = action.payload;
      })
      .addCase(fetchBbearingItem.rejected, (state, action) => {
        state.loadingBearingItem = false;
        state.errorBearingItem = action.error;
      });
  },
});

export default bearingItemSlice.reducer;
