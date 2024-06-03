// UserSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDetails {
  name: string;
  email?: string;
}

interface UserState {
  userDetails: UserDetails;
}

const initialState: UserState = {
  userDetails: { name: "" }, // Initialize with an empty string or any default value
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserDetails>) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = UserSlice.actions;

export default UserSlice.reducer;
