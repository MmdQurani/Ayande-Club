import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import LoginModal from "../Components/Modals/LoginModal/LoginModal";
import SignupModal from "../Components/Modals/SignupModal/SignupModal";
import VerifyModal from "../Components/Modals/VerifyModal/VerifyModal";
import UserInfoModal from "../Components/Modals/UserInfoModal/UserInfoModal";
import AgreementsModal from "../Components/Modals/AgreementsModal/AgreementsModal";

function Layout({ children }) {
  const location = useLocation();

  // وقتی مسیر دقیق برابر "/login" باشد مودال را نمایش بده
  const showLoginModal = location.pathname === "/login";
  const showSignupModal = location.pathname === "/signup";
  const showVerifyModal = location.pathname === "/signup/verify";
  const showUserInfoModal = location.pathname === "/signup/confirm";
  const showAgreementsModal = location.pathname === "/signup/agreements";

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
      {showAgreementsModal && <AgreementsModal />}
    </>
  );
}

export default Layout;
