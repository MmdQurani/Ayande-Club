// src/Components/Modals/CodeVerificationModal/CodeVerificationModal.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/images/logo/logo.png";
import capchaCodeImg from '../../../assets/images/download.jpeg'
import info_circle from "../../../assets/icons/info-circle.png";
import refresh from "../../../assets/icons/refresh-2.png";


export default function CodeVerificationModal() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: ارسال smsCode و captchaInput به سرور برای اعتبارسنجی
    // در صورت موفقیت:
    navigate("/signup/contract");  // یا هر مسیر بعدی که لازم دارید
  };

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div className="relative bg-white rounded-lg  w-[498px] max-w-[95%] h-[610px] max-h-[90%] overflow-y-auto shadow-lg flex flex-col justify-center" dir="rtl">

        <img
          src={logo}
          alt="logo"
          className="w-[90px] h-[36px] object-contain self-center mt-4"
        />

        <span className="text-[16px] mt-6 text-center text-secondary-3">ثبت نام باشگاه مشتریان کارگزاری آینده</span>

        <form onSubmit={handleSubmit} className="space-y-12 h-max flex flex-col items-center mt-10">

          <div className="space-y-4 h-max flex flex-col justify-around sm:w-5/6 w-8/9">
            <div className="w-full h-max space-y-2">
              <span className="text-xs">کد امضا دیجیتال سجام ارسال شده را وارد کنید</span>
              <input
                type="text"
                placeholder="کد تایید باید 6 رقمی باشد"
                className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2" />
              <button className="text-xs text-neutral-400 hover:text-secondary-2 cursor-pointer">
                <p className="p-0 m-0">ارسال مجدد کد</p>
              </button>
            </div>

            <div className="w-full h-max space-y-2 flex flex-row items-center">
              <div className="flex-1 border border-gray-300 rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="کد تایید باید 6 رقمی باشد"
                  className="w-full placeholder:text-neutral-300 placeholder:text-xs focus:outline-none rounded px-2" />
                <img
                  src={capchaCodeImg}
                  alt="کد امنیتی"
                  className="object-contain max-h-10"
                />
              </div>
              <button >
                <img className="w-6 mr-4 cursor-pointer transition-transform duration-300 hover:rotate-180" src={refresh} alt="refresh"/>
              </button>
            </div>
          </div>

          {/* پیغام تأیید */}
          <div className="text-xs sm:w-5/6 w-8/9 bg-blue-100/50 text-blue-900 py-3.5 px-4 rounded-md mb-8 flex flex-row items-center justify-center gap-x-2">
            <img src={info_circle} alt="" />
            <p>
              تأیید قراردادها به منزلهٔ پذیرش تمامی مفاد آن می‌باشد.
            </p>
          </div>

          <button
            type="submit"
            className="sm:w-5/6 w-8/9 py-3 rounded-lg bg-gradient-to-t from-secondary-2 to-secondary-2/45 hover:bg-secondary-2/75 cursor-pointer text-white"
          >
            ثبت
          </button>
        </form>
      </div>
    </div>
  );
}
