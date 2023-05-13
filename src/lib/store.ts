import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "@/features/home/homeSlice";
import navigationReducer from "@/features/ui/NavigationLinks/NavigationSlice";
import qrScannerReducer from "@/features/qr-scanner/qrScannerSlice";
import isLoadingReducer from "@/features/ui/Loading/isLoadingSlice";
import modalWindowReducer from "@/features/ui/ModalWindow/modalWindowSlice";
import notificationReducer from "@/features/ui/Notification/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
    qrScanner: qrScannerReducer,
    isLoading: isLoadingReducer,
    modalWindow: modalWindowReducer,
    notification: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
