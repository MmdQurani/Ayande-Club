import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import Routes, { LoginRoutes } from "./Routes/Routes";
import AuthLayout from "./Layout/AuthLayout";
import MainLayout from "./Layout/MainLayout";
import PrivateRoute from "./Routes/PrivateRoute";
import "./App.css";

function App() {
  const getLoginRoutes = useRoutes(LoginRoutes);

  const getRoutes = useRoutes(
    Routes.map(route => ({
      ...route,
      element: <PrivateRoute>{route.element}</PrivateRoute>
    }))
  );

  const location = useLocation();
  const loginPaths = LoginRoutes.map(route => route.path);
  const isLoginRoute = loginPaths.includes(location.pathname);

  return (
    <>
      {isLoginRoute ? (
        <AuthLayout>{getLoginRoutes}</AuthLayout>
      ) : (
        <MainLayout>{getRoutes}</MainLayout>
      )}
    </>
  );
}

export default App;
