import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Toast = {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
  icon: svgObject;
};
type svgObject = {
  src: string;
  height: number;
  width: number;
};

export interface notificationState {
  toastList: Toast[];
}

const initialState: notificationState = {
  toastList: [],
};

const notificationSlice = createSlice({
  name: "nofitication",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Toast>) => {
      state.toastList.push(action.payload);
    },
    deleteElement: (state, action: PayloadAction<number>) => {
      // state.toastList.splice(action.payload, 1);
      state.toastList = state.toastList.filter((item, index) => {
        return index !== action.payload;
      });
    },
    update: (state, action: PayloadAction<Toast[]>) => {
      state.toastList = action.payload;
    },
  },
});

export const { add, deleteElement, update } = notificationSlice.actions;

export default notificationSlice.reducer;
