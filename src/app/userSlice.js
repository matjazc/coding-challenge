import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: true,
  },
  reducers: {
    switchUser: state => {
      state.value = !state.value
    }
  },
});

export const { switchUser } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;
