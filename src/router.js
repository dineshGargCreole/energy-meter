import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./screens/home";

function Router() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Navigate to="/login" />} />
      <Route exact path="/:role" element={<Home />} />
    </Routes>
  );
}

export default Router;
