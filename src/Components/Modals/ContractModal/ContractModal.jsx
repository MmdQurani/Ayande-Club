import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import contractImg from "../../../assets/images/bg-img/footerBack1.png";
import logo from "../../../assets/images/logo/logo.png";

import expandIcon from '../../../assets/icons/expand-05.png'

export default function ContractModal() {
  const navigate = useNavigate();
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = contractImg;
    link.download = "contract.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConfirm = () => {
    navigate("/signup/success");
  };

  // بستن پیش‌نمایش
  const closePreview = () => setPreviewOpen(false);

  return (
    <>
      {/* مودال اصلی */}
      <div className="fixed inset-0 z-150 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

        <div
          className="relative bg-white rounded-lg w-[500px] max-w-[95%] max-h-[90%] overflow-y-auto shadow-lg p-6 flex flex-col"
          dir="rtl"
        >
          {/* لوگو و متن‌ها */}
          <img
            src={logo}
            alt="logo"
            className="w-[90px] h-[36px] object-contain self-center mt-4"
          />
          <span className="text-[16px] mt-6 text-center text-secondary-3">
            ثبت نام باشگاه مشتریان کارگزاری آینده
          </span>
          <span className="text-xs mt-4 text-center text-neutral-500">
            کاربر گرامی، لطفا قرارداد خود را مشاهده و سپس تایید کنید.
          </span>

          <div className="relative flex-1 min-h-[337px] max-h-[337px] overflow-auto my-6 flex items-center justify-center">

            {contractImg ? (
              <>
                <div className="relative w-full h-full">
                  <img
                    src={contractImg}
                    alt="قرارداد"
                    className="max-h-[337px] w-full object-contain"
                  />
                </div>
              </>
            ) : (
              <span>قرارداد دریافت نشده است.</span>
            )}


            <button
              onClick={() => setPreviewOpen(true)}
              className="absolute bottom-2 right-2 bg-white/80 hover:bg-white p-2 cursor-pointer text-xs rounded shadow"
            >
              <img className="w-6 h-6" src={expandIcon} alt="" />
            </button>

          </div>

          {/* دکمه‌های دانلود و تایید */}
          <div className="flex justify-between gap-x-18">
            <button
              onClick={handleDownload}
              className="flex-1 py-2 rounded-lg border border-secondary-2 text-secondary-2 hover:bg-secondary-2/10 cursor-pointer"
            >
              دانلود قرارداد
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 py-2 rounded-lg bg-gradient-to-t from-secondary-2 to-secondary-2/45 hover:bg-secondary-2/75 cursor-pointer text-white"
            >
              تایید نهایی
            </button>
          </div>
        </div>
      </div>

      {/* overlay نمایش تمام‌صفحه با قابلیت بستن */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-150 bg-black/85 backdrop-blur-sm flex items-center justify-center"
          onClick={closePreview}
        >

          <button
            onClick={closePreview}
            className="absolute top-6 right-8 text-white text-5xl cursor-pointer font-bold"
            aria-label="بستن پیش‌نمایش"
          >
            ×
          </button>

          <div
            className="relative max-w-full max-h-full p-4"
            onClick={e => e.stopPropagation()}
          >

            {/* تصویر تمام‌صفحه */}
            <img
              src={contractImg}
              alt="قرارداد تمام صفحه"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
