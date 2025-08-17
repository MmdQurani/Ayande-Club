import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../../assets/images/logo/logo.png'
import success from '../../../assets/icons/success.png'

export default function SuccessModal() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      <div
        className="relative space-y-6 bg-white rounded-lg w-[500px] max-w-[95%] h-[610px] max-h-[90%] overflow-y-auto shadow-lg p-6 flex flex-col items-center justify-center"
        dir="rtl"
      >
        <img
          src={logo}
          alt="logo"
          className="w-[90px] h-[36px] object-contain self-center mt-4"
        />

        <div className='space-y-6 flex flex-col items-center my-8'>
          <img
            src={success}
            alt="logo"
            className="w-[72px] h-[72px] object-contain self-center"
          />
          <span className='text-green-600'>ثبت موفق</span>
        </div>

        <span className="text-[16px] mt-6 text-center text-secondary-3">ثبت نام در کارگزاری بانک آینده با موفقیت انجام شد.</span>
        <p className='m-0 p-0 text-sm text-center my-6 px-12 leading-7 text-neutral-500'>نام کاربری و رمز عبور شما به شماره ثبت شده در سجام پیامک خواهد شد ، لطفا بعد از دریافت این اطلاعات دوباره برای ورود به باشگاه اقدام کنید.</p>

        <button
          onClick={() => navigate('/')}
          className=" px-6 py-2 rounded-lg border-2 border-secondary-2 text-secondary-2 hover:bg-secondary-2/10 cursor-pointer">
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}
