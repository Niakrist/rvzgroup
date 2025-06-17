import { IQueryParams } from "@/types/queryParams.interface";
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from "@reduxjs/toolkit";

interface IFilterState {
  queryParams: IQueryParams;
  isLoading: boolean;
  isError: SerializedError | null;
}

const initialState: IFilterState = {
  queryParams: {
    bearingDesignId: "",
    bearingSealId: "",
    bearingTypeId: "",
    cornerId: "",
    feature2Id: "",
    featureId: "",
    holeId: "",
    innerRingId: "",
    loadTypeId: "",
    materialId: "",
    outerRingId: "",
    rollerTypeId: "",
    rowCountId: "",
    sealId: "",
    sepId: "",
    standartId: "",
    bushingTypeId: "",
    lubricationHoleId: "",
    connectionId: "",
    page: "",
    minInnerDiameter: "",
    maxInnerDiameter: "",
    minOuterDiameter: "",
    maxOuterDiameter: "",
    minWidth: "",
    maxWidth: "",
    minPrice: "",
    maxPrice: "",
    search: "",
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

export const resetQueryParamAsync = createAsyncThunk(
  "filters/resetQueryParam",
  async (key: keyof IQueryParams) => {
    return key;
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
      })
      .addCase(
        resetQueryParamAsync.fulfilled,
        (state, action: PayloadAction<keyof IQueryParams>) => {
          state.queryParams[action.payload] = "";
        }
      );
  },
});

export const { resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
