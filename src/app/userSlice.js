import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: { name: "teacher@school.org", menuItems: ["Lessons", "Libraries"] },
  },
  reducers: {
    switchUser: state => {
    }
  },
});

export const { switchUser } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;
