import Dashboard from "../Pages/Dashboard/Dashboard";
import LandingPage from "../Pages/LandingPage/LandingPage";

export const LoginRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LandingPage /> },
  { path: "/signup", element: <LandingPage /> },
  { path: "/signup/verify", element: <LandingPage /> },
  { path: "/signup/confirm", element: <LandingPage /> },
  { path: "/signup/agreements", element: <LandingPage /> },
  { path: "/signup/quiz", element: <LandingPage /> },
  { path: "/signup/security", element: <LandingPage /> },
  { path: "/signup/contract", element: <LandingPage /> },
  { path: "/signup/success", element: <LandingPage /> },
];

const Routes = [
  { path: "/dashboard", element: <Dashboard /> },
];

export default Routes;