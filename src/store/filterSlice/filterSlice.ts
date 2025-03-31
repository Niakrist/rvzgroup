import { IQueryParams } from "@/types/queryParams.interface";
import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

interface IFilterState {
  queryParams: IQueryParams;
  isLoading: boolean;
  isError: SerializedError | null;
}

const initialState: IFilterState = {
  queryParams: {
    search: "",
    minPrice: "",
    maxPrice: "",
    minInnerDiameter: "",
    maxInnerDiameter: "",
    minOuterDiameter: "",
    maxOuterDiameter: "",
    minWidth: "",
    maxWidth: "",
    standartId: "",
    bodyId: "",
    formaId: "",
    loadId: "",
    rowId: "",
    openId: "",
  },
  isLoading: false,
  isError: null,
};

export const updateQueryParamAsync = createAsyncThunk(
  "filter/updateQueryParam",
  async (payload: { key: keyof IQueryParams; value: string }) => {
    return payload;
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.queryParams = initialState.queryParams;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateQueryParamAsync.pending, (state) => {
        state.isError = null;
        state.isLoading = true;
      })
      .addCase(updateQueryParamAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.queryParams = {
          ...state.queryParams,
          [action.payload.key]: action.payload.value,
        };
      })
      .addCase(updateQueryParamAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      });
  },
});

export const { resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
