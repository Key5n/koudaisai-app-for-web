import { User } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

export const USER = "user";
export const EXACT = { exact: "environment" } as const;

export type qrScannerState = {
  isCameraOpen: boolean;
  facingMode: typeof USER | typeof EXACT;
  localStream: MediaStream | null;
  QRCodeData: string[];
  User: User[];
};

const initialState: qrScannerState = {
  isCameraOpen: false,
  facingMode: EXACT,
  localStream: null,
  QRCodeData: [],
  User: [],
};

export const qrScannerSlice = createSlice({
  name: "qrScanner",
  initialState,
  reducers: {
    toggleCameraOpen: (state) => {
      !state.isCameraOpen;
    },
    toggleFacingMode: (state) => {
      if (state.facingMode === USER) {
        state.facingMode = EXACT;
      } else if (state.facingMode === EXACT) {
        state.facingMode = USER;
      }
    },
  },
});

export const { toggleCameraOpen, toggleFacingMode } = qrScannerSlice.actions;

export default qrScannerSlice.reducer;
