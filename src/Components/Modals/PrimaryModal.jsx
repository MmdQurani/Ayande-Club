// PrimaryModal.jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import useIsMobile from '../../Hooks/useIsMobile';

function PrimaryModal({ isOpen, onClose, style , mobileStyle, children }) {

  const isMobile = useIsMobile(767)

  const [showModal, setShowModal] = useState(false);
  const [renderModal, setRenderModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setRenderModal(true);
      setTimeout(() => setShowModal(true), 10);
    } else {
      setShowModal(false);
      setTimeout(() => setRenderModal(false), 300);
    }
  }, [isOpen]);

  if (!renderModal) return null;

  // مودال برای اندازه های بزرگتر از موبایل
  const modalContentMain = (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
      <div
        className={`relative bg-white rounded-lg p-10 ${style ? style : 'w-[498px] max-w-[90%] min-h-[610px] h-max'} py-8 shadow-lg flex flex-col justify-center items-center transition-all duration-300 transform ${showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        dir="rtl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 cursor-pointer text-gray-400 hover:text-gray-600 text-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );

  // مودال برای اندازه های موبایل
  const modalContentMobile = (
    <div className={`fixed inset-0 bg-black/15 backdrop-blur-sm z-[240] transition-opacity duration-300 m-0 ${isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
      <div onClick={onClose} className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
      <div
        className={`fixed bottom-0 left-0 right-0 z-[250] max-h-[90%] ${mobileStyle ? mobileStyle : 'h-[524px]'} bg-white rounded-t-2xl shadow-lg p-6 pt-12 transform transition-transform duration-300 flex flex-col justify-center items-center m-0 ${showModal ? 'translate-y-0' : 'translate-y-full'
          }`}
        dir="rtl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 cursor-pointer text-gray-400 hover:text-gray-600 text-lg"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )

  // رندر مودال بصورت مستقیم در بادی سایت
  if (isMobile) {
    return ReactDOM.createPortal(modalContentMobile, document.body);
  } else {
    return ReactDOM.createPortal(modalContentMain, document.body);
  }

}

export default PrimaryModal;
