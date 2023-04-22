import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export type NavigationState = {
  isOpen: boolean;
};

const initialState: NavigationState = {
  isOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = navigationSlice.actions;

export default navigationSlice.reducer;
