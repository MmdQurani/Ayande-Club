import Dashboard from "../Pages/Dashboard/Dashboard";
import ClubRules from "../Pages/Growth/ClubRules";
import EarnPoints from "../Pages/Growth/EarnPoints";
import PointsGuide from "../Pages/Growth/PointsGuide";
import ContactUs from "../Pages/Help_Center/ContactUs";
import Faq from "../Pages/Help_Center/Faq";
import Videos from "../Pages/Help_Center/Videos";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Points from "../Pages/Points/Points";
import Referrals from "../Pages/Referrals/Referrals";
import Rewards from "../Pages/Rewards/Rewards";

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
  { path: "/rewards", element: <Rewards /> },
  { path: "/points", element: <Points /> },

  { path: "/growth/points-guide", element: <PointsGuide /> },
  { path: "/growth/earn-points", element: <EarnPoints /> },
  { path: "/growth/club-rules", element: <ClubRules /> },
  
  { path: "/referrals", element: <Referrals /> },

  { path: "/help-center/contact-us", element: <ContactUs /> },
  { path: "/help-center/faq", element: <Faq /> },
  { path: "/help-center/videos", element: <Videos /> },
];

export default Routes;