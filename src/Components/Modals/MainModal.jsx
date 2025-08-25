import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';

import LoginModal from './LoginModal/LoginModal';
import CodeVerificationModal from './CodeVerificationModal/CodeVerificationModal';
import SignupModal from './SignupModal/SignupModal';
import VerifyModal from './VerifyModal/VerifyModal';
import UserInfoModal from './UserInfoModal/UserInfoModal';
import AgreementsModal from './AgreementsModal/AgreementsModal';
import QuizModal from './QuizModal/QuizModal';
import ContractModal from './ContractModal/ContractModal';
import SuccessModal from './SuccessModal/SuccessModal';
import useIsMobile from '../../Hooks/useIsMobile';

function MainModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile(768);

  const modalMap = {
    '/login': <LoginModal />,
    '/signup': <SignupModal />,
    '/signup/verify': <VerifyModal />,
    '/signup/confirm': <UserInfoModal />,
    '/signup/agreements': <AgreementsModal />,
    '/signup/quiz': <QuizModal />,
    '/signup/security': <CodeVerificationModal />,
    '/signup/contract': <ContractModal />,
    '/signup/success': <SuccessModal />,
  };

  const CurrentModal = modalMap[location.pathname];

  const [showModal, setShowModal] = useState(false);
  const [renderModal, setRenderModal] = useState(false);

  useEffect(() => {
    if (CurrentModal) {
      setRenderModal(true);
      setTimeout(() => setShowModal(true), 10);
    } else {
      setShowModal(false);
      setTimeout(() => setRenderModal(false), 300);
    }
  }, [CurrentModal]);

  if (!renderModal) return null;

  const handleClose = () => navigate('/');

  const modalContent = (
    <>
      {!isMobile ? (
        // دسکتاپ
        <>
          <div className="fixed inset-0 z-150 flex items-center justify-center">
            <div onClick={handleClose} className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
            <div
              className={`relative bg-white rounded-lg p-6 w-[498px] max-w-[90%] min-h-[610px] h-max py-8 shadow-lg flex flex-col justify-center items-center transition-all duration-300 transform ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              dir="rtl"
            >
              {/* دکمه بستن */}
              <button
                onClick={handleClose}
                className="absolute top-4 left-4 cursor-pointer text-gray-400 hover:text-gray-600 text-2xl"
              >
                ✕
              </button>

              <img src={logo} alt="logo" className="w-[90px] h-[36px] object-contain mt-6" />

              <span className="text-[16px] my-6 text-secondary-3">
                ورود به باشگاه مشتریان کارگزاری آینده
              </span>
              {CurrentModal}
            </div>
          </div>
        </>
      ) : (
        // موبایل
        <>
          <div
            onClick={handleClose}
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-140 transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'
              }`}
          />
          <div
            className={`fixed bottom-0 left-0 right-0 z-150  h-[645px] bg-white rounded-t-2xl shadow-lg p-4 pb-8 py-4 transform transition-transform duration-300 flex flex-col justify-center items-center ${showModal ? 'translate-y-0' : 'translate-y-full'
              }`}
            dir="rtl"
          >

            {/* دکمه بستن */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 cursor-pointer text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
            <div className="w-full flex justify-center">
              <img src={logo} alt="logo" className="w-[80px] h-[32px] object-contain my-4" />
            </div>
            <span className="text-[16px] mt-6 mb-10 text-secondary-3">
              ورود به باشگاه مشتریان کارگزاری آینده
            </span>
            {CurrentModal}
          </div>
        </>
      )}
    </>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}

export default MainModal;
