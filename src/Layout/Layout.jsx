import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LoginModal from "../Components/LoginModal/LoginModal";
import SignupModal from "../Components/SignupModal/SignupModal";
import VerifyModal from "../Components/VerifyModal/VerifyModal";

function Layout({ children }) {
  const location = useLocation();

  // وقتی مسیر دقیق برابر "/login" باشد مودال را نمایش بده
  const showLoginModal = location.pathname === "/login";
  const showSignupModal = location.pathname === "/signup";
  const showVerifyModal = location.pathname === "/signup/verify";

  return (
    <>
      <Header />

      <main className="relative">  {/* relative برای تراز مودال */}
        {children}
      </main>

      <Footer />

      {showLoginModal && <LoginModal />}
      {showSignupModal && <SignupModal />}
      {showVerifyModal && <VerifyModal />}
    </>
  );
}

export default Layout;
