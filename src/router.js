import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Home from "./screens/home";
import CaptureMeterReading from "./screens/captureMeterReading";

const PrivateRoute = () => {
  const user = sessionStorage.getItem("user");
  const auth = { token: user ? true : false };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route exact path="/:role" element={<Home />} />
        <Route exact path="/:role/capture" element={<CaptureMeterReading />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Navigate to="/login" />} />
      <Route exact path="/*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
}

export default Router;
