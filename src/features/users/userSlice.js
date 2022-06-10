import { createSlice, AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {
    return await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "Success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default usersSlice.reducer;
export const userList = (state) => state.users;
