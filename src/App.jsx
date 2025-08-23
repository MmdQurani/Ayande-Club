import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import Routes, { LoginRoutes } from './Routes/Routes';
// import Layout from './Layout/AuthLayout';
import AuthLayout from './Layout/AuthLayout';
import MainLayout from './Layout/MainLayout';
import './App.css';

function App() {
  const getLoginRoutes = useRoutes(LoginRoutes);
  const getRoutes = useRoutes(Routes);
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
