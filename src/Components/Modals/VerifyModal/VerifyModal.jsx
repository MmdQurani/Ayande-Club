import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../../assets/images/logo/logo.png'

export default function VerifyModal() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // const response = await fetch("/api/verify", {
    //   method: "POST",
    //   body: JSON.stringify({ code }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // const data = await response.json();

    // عبور اطلاعات به مودال بعدی از طریق state
    // navigate("/signup/confirm", { state: { userData: data } });
    navigate("/signup/confirm");
  };

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center">

      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div className="relative bg-white rounded-lg p-6 w-[498px] max-w-[90%] h-[610px] max-h-[90%] pt-6 pb-12 shadow-lg flex flex-col justify-center items-center" dir="rtl">
        <img src={logo} alt="logo" className="w-[90px] h-[36px] object-contain mt-6" />

        <span className="text-[16px] my-6 text-secondary-3">ورود به باشگاه مشتریان کارگزاری آینده</span>

        <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col justify-between sm:w-5/6 w-8/9">

          <div className="w-full h-max">
            <span className="text-xs">کد تایید سجام ارسال شده را وارد کنید :</span>
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="کد تایید باید 6 رقمی باشد"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2" />

            <div className="w-full h-auto flex justify-center mt-6">
              <button className="text-sm text-neutral-400 cursor-pointer hover:text-secondary-2">ارسال مجدد کد</button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer transition">
            ثبت
          </button>
        </form>

      </div>
    </div>
  );
}
