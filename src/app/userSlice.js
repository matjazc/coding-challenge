import { createSlice } from "@reduxjs/toolkit";
import { accounts } from "../utils/accounts";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: accounts[0],
  },
  reducers: {
    switchUser: (state) => {
      state.value =
        state.value.id === accounts[0].id ? accounts[1] : accounts[0]; //TODO: better logic to switch accounts
    },
  },
});

export const { switchUser } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
