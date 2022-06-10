import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};
export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.value = action.payload;
    },
    logoutUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { userData, logoutUser } = loginSlice.actions;
export const selectUser = (state) => state.login.value;
export default loginSlice.reducer;
