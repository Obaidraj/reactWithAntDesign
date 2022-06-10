import React from "react";

import DashboardScreen from "./screens/dashboard-screen/dashboard-screen";
import LoginScreen from "./screens/login-screen/login-screen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "./screens/about-screen/about-screen";
import Test from "./screens/test";
import PrivateRoutes from "./routes/private-route";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Route>

        <Route path="/" element={<LoginScreen />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
