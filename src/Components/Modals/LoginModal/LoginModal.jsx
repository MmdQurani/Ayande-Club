import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from '../../../assets/images/logo/logo.png'

export default function LoginModal() {

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center">

      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div className="relative bg-white rounded-lg p-6 w-[498px] max-w-[90%] min-h-[480px] h-max py-8 shadow-lg flex flex-col justify-center items-center" dir="rtl">
        <img src={logo} alt="logo" className="w-[90px] h-[36px] object-contain mt-6" />

        <span className="text-[16px] my-6 text-secondary-3">ورود به باشگاه مشتریان کارگزاری آینده</span>

        <form className="space-y-12 h-1/2 flex flex-col justify-around sm:w-5/6 w-8/9">
          <div className="w-full h-max">
            <span className="text-xs">کد ملی خود را وارد کنید</span>
            <input
              type="text"
              placeholder="کد ملی باید 10 رقمی باشد"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2" />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer transition">
            ورود
          </button>
        </form>

        <div className="text-sm flex flex-row gap-x-2 justify-center mt-12">
          <span className="text-neutral-400">حساب کارگزاری ندارید؟</span>
          <Link className="text-neutral-800" to={'/signup'}>ثبت نام در کوانتوم</Link>
        </div>

      </div>
    </div>
  );
}
