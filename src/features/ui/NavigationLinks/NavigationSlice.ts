import { createSlice } from "@reduxjs/toolkit";

export type NavigationState = {
  isNavigationOpen: boolean;
};

const initialState: NavigationState = {
  isNavigationOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleIsNavigatonOpen: (state) => {
      state.isNavigationOpen = !state.isNavigationOpen;
    },
  },
});

export const { toggleIsNavigatonOpen } = navigationSlice.actions;

export default navigationSlice.reducer;
