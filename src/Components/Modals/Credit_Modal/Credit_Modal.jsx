import React from 'react'

function Credit_Modal({ children }) {
  return (
    <div className='credit_modal w-10/13 h-full flex flex-col justify-around items-center space-y-12'>

      <div className='credit_modal_header w-[335px] h-[135px] flex flex-col items-center justify-center space-y-4'>
        <span className='text-sm text-secondary-3'>دویست میلیون تومان</span>
        <span className='text-lg btn_gradient px-8 py-2 rounded-lg text-white'>2.000.000.000</span>
        <p className='text-sm text-secondary-3'>دریافت اعتبار در سامانه سود آینده</p>
      </div>

      <div className='credit_modal_body w-full h-max flex flex-col space-y-4'>
        <span className='text-sm text-neutral-600 leading-7'>جهت دریافت این اعتبار، ابتدا درخواست خود را ثبت و سپس توافق‌نامه را امضا کنید.</span>

        <label className="flex items-center gap-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-secondary-3 border-neutral-300 rounded focus:ring-secondary-3"
          />
          <span className="text-sm text-neutral-500"><p className='text-secondary-2 inline'>توافق</p> نامه را می پذیرم</span>
        </label>
      </div>

      {children}
    </div>
  )
}

export default Credit_Modal