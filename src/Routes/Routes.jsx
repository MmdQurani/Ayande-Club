import LandingPage from "../Pages/LandingPage/LandingPage";

const Routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <LandingPage /> },
  { path: "/signup", element: <LandingPage /> },
  { path: "/signup/verify", element: <LandingPage /> },
  { path: "/signup/confirm", element: <LandingPage /> },
];

export default Routes;
