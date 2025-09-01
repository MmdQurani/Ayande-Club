import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import refresh from "../../../assets/icons/refresh-2.png";

import { getCaptcha } from '../../../APIs/apiServices'
import { loginUser } from "../../../APIs/loginUser";
import Toast from "../../Toast/Toast";

export default function LoginModal() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("national");
  const [showPassword, setShowPassword] = useState(false);

  const [nationalId, setNationalId] = useState('')
  const [password, setPassword] = useState('')
  const [captchaSrc, setCaptchaSrc] = useState('');
  const [captchaValue, setCaptchaValue] = useState('')
  const [captchaId, setCaptchaId] = useState('')
  const [isSuccess, setIsSuccess] = useState(null);
  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false)

  const getCaptchaApi = async () => {
    setLoading(true)
    await getCaptcha().then(item => {
      setCaptchaSrc(item.src)
      setCaptchaId(item.id)
    });
    setLoading(false)
  }

  const checkLoginUser = async () => {
    const res = await loginUser(nationalId, password, captchaId, captchaValue);

    setIsSuccess(res.isSuccess);
    setError(res.message);


    if (res.isSuccess && res.data.accessToken) {
      localStorage.setItem("token", res.data.accessToken);
    }

    return res;
  };


  useEffect(() => {
    if (isSuccess === true) {
      navigate("/dashboard");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    getCaptchaApi()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLoginUser()
  }

  return (
    <>

      {isSuccess === false && error && (
        <Toast
          message={error}
          type="error"
          onClose={() => setError("")}
        />
      )}

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

          <div className="relative mt-1">
            <span className="text-xs text-neutral-800">کد ملی خود را وارد کنید</span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full border border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-3 rounded mt-1 px-3 py-2 pl-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute inset-y-0 top-8 left-2 cursor-pointer flex items-center justify-center text-gray-500"
            >
              {showPassword ?
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" stroke="currentColor" color="currentColor" xmlns="http://www.w3.org/2000/svg"><svg width="30" height="31" viewBox="0 0 30 31" fill="none"><path d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z" stroke="#A2812E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z" stroke="#A2812E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></svg>
                :
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" stroke="currentColor" color="currentColor" xmlns="http://www.w3.org/2000/svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213" stroke="#A2812E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg><use href="#eye_off" x="0" y="0"></use></svg>
              }
            </button>
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
                {loading ? <span className="text-xs">در حال بارگذاری...</span> : <img src={captchaSrc} alt="کد امنیتی" className="object-contain max-h-10" />}
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

      {/* <div className="text-sm flex flex-row gap-x-2 justify-center mt-12">
        <span className="text-neutral-400">حساب کارگزاری ندارید؟</span>
        <Link className="text-neutral-800" to={'/signup'}>
          ثبت نام در کوانتوم
        </Link>
      </div> */}
    </>
  );
}
