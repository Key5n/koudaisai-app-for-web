import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import checkIcon from "@/assets/check.svg";
import errorIcon from "@/assets/error.svg";
import warningIcon from "@/assets/warning.svg";
import infoIcon from "@/assets/info.svg";

export interface NotificationAction {
  title: string;
  description: string;
  type: "success" | "error" | "warning" | "info";
}

export interface DetailedNotification extends NotificationAction {
  path: string;
  color: "#5cb85c" | "#d9534f" | "#5bc0de" | "#f0ad4e";
}

export interface notificationState {
  notificationList: DetailedNotification[];
}

const initialState: notificationState = {
  notificationList: [],
};

const notificationSlice = createSlice({
  name: "nofitication",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationAction>) => {
      switch (action.payload.type) {
        case "success": {
          const notification: DetailedNotification = {
            ...action.payload,
            color: "#5cb85c",
            path: checkIcon.src,
          };
          state.notificationList.push(notification);
          break;
        }
        case "warning": {
          const notification: DetailedNotification = {
            ...action.payload,
            color: "#f0ad4e",
            path: warningIcon.src,
          };
          state.notificationList.push(notification);
          break;
        }
        case "error": {
          const notification: DetailedNotification = {
            ...action.payload,
            color: "#d9534f",
            path: errorIcon.src,
          };
          state.notificationList.push(notification);
          break;
        }
        case "info": {
          const notification: DetailedNotification = {
            ...action.payload,
            color: "#5bc0de",
            path: infoIcon.src,
          };
          state.notificationList.push(notification);
          break;
        }
        default:
          throw new Error("Illegal notification type case");
      }
    },
    deleteElement: (state, action: PayloadAction<number>) => {
      state.notificationList = state.notificationList.filter((item, index) => {
        return index !== action.payload;
      });
    },
    update: (state, action: PayloadAction<NotificationAction[]>) => {
      action.payload.forEach((notification) => {
        switch (notification.type) {
          case "success": {
            const detailedNotification: DetailedNotification = {
              ...notification,
              color: "#5cb85c",
              path: checkIcon.src,
            };
            state.notificationList.push(detailedNotification);
            break;
          }
          case "warning": {
            const detailedNotification: DetailedNotification = {
              ...notification,
              color: "#f0ad4e",
              path: warningIcon.src,
            };
            state.notificationList.push(detailedNotification);
            break;
          }
          case "error": {
            const detailedNotification: DetailedNotification = {
              ...notification,
              color: "#d9534f",
              path: errorIcon.src,
            };
            state.notificationList.push(detailedNotification);
            break;
          }
          case "info": {
            const detailedNotification: DetailedNotification = {
              ...notification,
              color: "#5bc0de",
              path: infoIcon.src,
            };
            state.notificationList.push(detailedNotification);
            break;
          }
          default:
            throw new Error("Illegal notification type case");
        }
      });
    },
  },
});

export const { addNotification, deleteElement, update } =
  notificationSlice.actions;

export default notificationSlice.reducer;
