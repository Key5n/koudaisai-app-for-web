import { createSlice } from "@reduxjs/toolkit";

export type isLoadingState = {
  isLoading: boolean;
};

const initialState: isLoadingState = {
  isLoading: false,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { toggleIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
