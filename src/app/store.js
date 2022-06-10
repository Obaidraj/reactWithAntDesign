import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginSlice from "../features/login-features/loginSlice";
import userReducer from "../features/users/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    login: loginSlice,
  },
});
