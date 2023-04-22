import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "@/features/home/homeSlice";
import navigationReducer from "@/features/layouts/NavigationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navigation: navigationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
