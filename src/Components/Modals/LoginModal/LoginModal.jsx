import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import refresh from "../../../assets/icons/refresh-2.png";

import { getCaptcha } from '../../../APIs/apiServices'
import { loginUser } from "../../../APIs/loginUser";

export default function LoginModal() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("national");
  const [captchaSrc, setCaptchaSrc] = useState("");

  const [nationalId, setNationalId] = useState('')
  const [password, setPassword] = useState('')
  const [captchaValue, setCaptchaValue] = useState('')
  const [captchaId, setCaptchaId] = useState('')

  const [loading, setLoading] = useState(false)

  const getCaptchaApi = async () => {
    await getCaptcha().then(item => {
      setCaptchaSrc(item.src)
      setCaptchaId(item.id)
    });
  }

  const checkLoginUser = async () => {
    const res = await loginUser(nationalId, password , captchaId , captchaValue);
    return res
  }

  useEffect(() => {
    getCaptchaApi()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLoginUser()
  }

  return (
    <>
      {/* تب‌ها */}
      <div className="flex flex-row gap-x-8 mb-6">
        <span
          className={
            "cursor-pointer pb-2 text-xs " +
            (activeTab === "national"
              ? "border-b-2 border-secondary-2 text-secondary-2"
              : "")
          }
          onClick={() => setActiveTab("national")}
        >
          ورود با کد ملی
        </span>
        <span
          className={
            "cursor-pointer pb-2 text-xs " +
            (activeTab === "mobile"
              ? "border-b-2 border-secondary-2 text-secondary-2"
              : "")
          }
          onClick={() => setActiveTab("mobile")}
        >
          ورود با شماره همراه
        </span>
      </div>

      {/* فرم‌ها */}
      {activeTab === "national" && (
        <form onSubmit={handleSubmit} className="space-y-3 h-1/2 flex flex-col justify-between sm:w-5/6 w-8/9">

          <div className="w-full h-max">
            <span className="text-xs text-neutral-800">کد ملی خود را وارد کنید</span>
            <input
              type="text"
              value={nationalId}
              onChange={e => setNationalId(e.target.value)}
              placeholder="کد ملی باید 10 رقمی باشد"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2"
            />
          </div>

          <div className="w-full h-max">
            <span className="text-xs text-neutral-800">رمز عبور</span>
            <input
              type="text"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2"
            />
          </div>

          <div className="w-full h-max space-y-2">
            <span className="text-xs text-neutral-800">کد امنیتی</span>
            <div className="flex flex-row items-center mt-1">
              <div className="flex-1 border border-gray-300 rounded-lg flex items-center">
                <input
                  type="text"
                  value={captchaValue}
                  onChange={e => setCaptchaValue(e.target.value)}
                  placeholder="کد امنیتی را وارد کنید"
                  className="w-full placeholder:text-neutral-300 placeholder:text-xs focus:outline-none rounded px-2" />
                <img
                  src={captchaSrc}
                  alt="کد امنیتی"
                  className="object-contain max-h-10"
                />
              </div>
              <button onClick={(e) => {
                e.preventDefault();
                getCaptchaApi()
              }} >
                <img className="w-6 mr-4 cursor-pointer transition-transform duration-300 hover:rotate-180" src={refresh} alt="refresh" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer transition text-[16px]"
          >
            ورود
          </button>
        </form>
      )}

      {activeTab === "mobile" && (
        <form className="space-y-12 h-1/2 flex flex-col justify-between sm:w-5/6 w-8/9">
          <div className="w-full h-max">
            <span className="text-xs text-neutral-800">شماره همراه خود را وارد کنید</span>
            <input
              type="text"
              placeholder="مثال: 0912xxxxxxx"
              className="w-full border-1 border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer transition text-[16px]"
          >
            ارسال کد
          </button>
        </form>
      )}

      <div className="text-sm flex flex-row gap-x-2 justify-center mt-12">
        <span className="text-neutral-400">حساب کارگزاری ندارید؟</span>
        <Link className="text-neutral-800" to={'/signup'}>
          ثبت نام در کوانتوم
        </Link>
      </div>
    </>
  );
}
