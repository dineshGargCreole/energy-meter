import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";

function Router() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Router;
