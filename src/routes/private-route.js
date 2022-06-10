import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../features/login-features/loginSlice";

const PrivateRoutes = () => {
  const usersData = useSelector(selectUser);
  console.log(usersData.auth);

  return usersData.auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
