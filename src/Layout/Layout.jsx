import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LoginModal from "../Components/Modals/LoginModal/LoginModal";
import SignupModal from "../Components/Modals/SignupModal/SignupModal";
import VerifyModal from "../Components/Modals/VerifyModal/VerifyModal";
import UserInfoModal from "../Components/Modals/UserInfoModal/UserInfoModal";

function Layout({ children }) {
  const location = useLocation();

  // وقتی مسیر دقیق برابر "/login" باشد مودال را نمایش بده
  const showLoginModal = location.pathname === "/login";
  const showSignupModal = location.pathname === "/signup";
  const showVerifyModal = location.pathname === "/signup/verify";
  const showUserInfoModal = location.pathname === "/signup/confirm";

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
      {showUserInfoModal && <UserInfoModal />}
    </>
  );
}

export default Layout;
