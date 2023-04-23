import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "@/features/home/homeSlice";
import navigationReducer from "@/features/ui/NavigationLinks/NavigationSlice";
import qrScannerReducer from "@/features/qr-scanner/qrScannerSlice";
import isLoadingReducer from "@/lib/isLoadingSlice";
import modalWindowReducer from "@/features/ui/ModalWindow/modalWindowSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
    qrScanner: qrScannerReducer,
    isLoading: isLoadingReducer,
    modalWindow: modalWindowReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
