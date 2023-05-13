import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User as UserState } from "@/types/types";

const initialState: UserState | null = {
  uid: "",
  email: "",
  phoneNumber: "",
  name: "",
  dayOneSelected: false,
  dayTwoSelected: false,
  dayOneVisited: false,
  dayTwoVisited: false,
  parentId: null,
  subUserIdList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const {
        uid,
        email,
        phoneNumber,
        name,
        dayOneSelected,
        dayTwoSelected,
        dayOneVisited,
        dayTwoVisited,
        parentId,
        subUserIdList,
      } = action.payload;
      state.uid = uid;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.name = name;
      state.dayOneSelected = dayOneSelected;
      state.dayTwoSelected = dayTwoSelected;
      state.dayOneVisited = dayOneVisited;
      state.dayTwoVisited = dayTwoVisited;
      state.parentId = parentId;
      state.subUserIdList = subUserIdList;
    },
    clearUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
