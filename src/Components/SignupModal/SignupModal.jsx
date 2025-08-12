import React from "react";
import logo from '../../assets/images/logo/logo.png'
import { Link, useNavigate } from "react-router-dom";


export default function SignupModal() {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: ارسال اطلاعات فرم به API
    // پس از موفقیت مستقیم navigate("/")
    // پس از موفقیت به مرحلهٔ تأیید کد برو
    navigate("/signup/verify");
    console.log('hello world')
  };

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center">

      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div className="relative bg-white rounded-lg p-6 w-[498px] max-w-[90%] min-h-[480px] max-h-[90%] h-max pt-6 pb-12 shadow-lg flex flex-col justify-center items-center" dir="rtl">
        <img src={logo} alt="logo" className="w-[90px] h-[36px] object-contain mt-6" />

        <span className="text-[16px] my-6 text-secondary-3">ثبت نام باشگاه مشتریان کارگزاری آینده</span>

        <form onSubmit={handleSubmit} className="space-y-4 h-1/2 flex flex-col justify-around sm:w-5/6 w-8/9">

          <div className="w-full h-max">
            <span className="text-xs">کد ملی خود را وارد کنید</span>
            <input
              type="text"
              placeholder="کد ملی باید 10 رقمی باشد"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2" />
          </div>

          <div className="w-full h-max">
            <span className="text-xs">شماره همراه ثبت شده در سجام را وارد کنید </span>
            <input
              type="text"
              placeholder="...0912"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2" />
          </div>

          <div className="w-full h-max">
            <span className="text-xs">رمز عبور خود را مشخص کنید</span>
            <input
              type="text"
              placeholder="دارای کارکتر $%# و حروف انگلیسی باشد"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2" />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer mt-6 transition">
            ثبت
          </button>
        </form>

      </div>
    </div>
  );
}
