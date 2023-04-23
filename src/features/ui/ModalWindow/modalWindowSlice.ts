import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type modalWindowState = {
  isModalWindowOpen: boolean;
  title: string;
  description: string;
};

const initialState: modalWindowState = {
  isModalWindowOpen: false,
  title: "",
  description: "",
};

export const modalWindowSlice = createSlice({
  name: "modalWindow",
  initialState,
  reducers: {
    openModal: (
      state,
      actions: PayloadAction<Omit<modalWindowState, "isModalWindowOpen">>
    ) => {
      state.title = actions.payload.title;
      state.description = actions.payload.description;
      state.isModalWindowOpen = true;
    },
    closeModal: (state) => {
      state.title = "";
      state.description = "";
      state.isModalWindowOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
