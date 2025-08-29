import React from 'react'
import { useNavigate } from 'react-router-dom';

function Change_Password() {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: ارسال اطلاعات فرم به API
    // پس از موفقیت مستقیم navigate("/")
    // پس از موفقیت به مرحلهٔ تأیید کد برو
    navigate("/signup/verify");
  };

  return (
    <div className='p-4 md:p-8 text-gray-700 bg-white border border-neutral-200 rounded-lg'>
      <div className='w-full'>
        <span className='text-[16px] text-neutral-800'>تغییر رمز عبور</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 h-1/2 flex flex-col justify-around w-full sm:w-[400px] mx-auto pb-20 pt-16">

        <div className="w-full h-max">
          <span className="text-xs">رمز عبور فعلی</span>
          <input
            type="text"
            placeholder="رمز عبور فعلی خود را وارد کنید"
            className="w-full border-1 h-[48px] border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-2 rounded-lg mt-1 px-3 py-2" />
        </div>

        <div className="w-full h-max">
          <span className="text-xs">رمز عبور جدید </span>
          <input
            type="text"
            placeholder="دارای کارکتر $%# و حروف انگلیسی باشد"
            className="w-full border-1 h-[48px] border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-2 rounded-lg mt-1 px-3 py-2" />
        </div>

        <div className="w-full h-max">
          <span className="text-xs">تکرار رمز عبور جدید</span>
          <input
            type="text"
            placeholder="تکرار رمز عبور جدید"
            className="w-full border-1 h-[48px] border-neutral-300 placeholder:text-neutral-300 placeholder:text-xs focus:outline-none focus:border-secondary-2 rounded-lg mt-1 px-3 py-2" />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-t from-secondary-2 to-secondary-2/45 text-white py-2 rounded-lg cursor-pointer mt-6 transition">
          ثبت
        </button>
      </form>

    </div>
  )
}

export default Change_Password