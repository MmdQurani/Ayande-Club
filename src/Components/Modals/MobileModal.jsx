import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import useIsMobile from '../../Hooks/useIsMobile';

function MobileModal({ isOpen, onClose, children }) {
  const [showModal, setShowModal] = useState(false);
  const [renderModal, setRenderModal] = useState(false);

  const isIPad = useIsMobile(1023)

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

  if (isIPad) {
    return (
      <>
        <div
          onClick={onClose}
          className={`fixed inset-0 bg-black/15 backdrop-blur-sm z-140 transition-opacity duration-300 m-0 ${showModal ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`fixed bottom-0 left-0 right-0 z-250 h-[524px] max-h-max bg-gray-50 rounded-t-2xl shadow-lg p-6 transform transition-transform duration-300 flex flex-col justify-center items-center m-0 ${showModal ? 'translate-y-0' : 'translate-y-full'}`}
          dir="rtl"
        >
          {children}
        </div>
      </>
    );
  }else {
    return null
  }
}


export default MobileModal;
