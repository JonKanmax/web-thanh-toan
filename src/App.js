import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import "./styles/index.css";

function App() {
  return (
    <Router basename="/web-thanh-toan">
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
