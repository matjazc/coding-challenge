import { createSlice } from '@reduxjs/toolkit';
import { accounts } from "../utils/accounts";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: accounts[0],
  },
  reducers: {
    switchUser: state => {
      state.value = state.value.name === accounts[0].name ? accounts[1] : accounts[0] //TODO: better logic to switch accounts
    }
  },
});

export const { switchUser } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;
