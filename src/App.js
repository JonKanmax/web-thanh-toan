import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword"; // Import trang quên mật khẩu

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
      </Routes>{" "}
    </Router>
  );
};

export default App;
