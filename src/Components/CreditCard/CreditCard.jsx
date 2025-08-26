import React from 'react'
import dashboard_header_img from '../../assets/images/img-banner-dashboard.png'

function CreditCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className='card_reward Quantum_Card min-w-0 md:min-w-[395px] h-[175px] flex-shrink-0 rounded-xl shadow p-4 flex flex-col items-center justify-between space-y-2 cursor-default'
    >
      <div className='card_reward_top w-full flex flex-col justify-center items-center space-y-4'>
        <span className='text-xs text-secondary-3'>دویست میلیون تومان</span>
        <span className='text-[16px] btn_gradient px-8 py-2 rounded-lg text-white'>2.000.000.000</span>
        <p className='text-xs text-secondary-3'>دریافت اعتبار در سامانه سود آینده</p>
      </div>
      <div className='card_reward_bottom flex-shrink-0 flex flex-row justify-between w-full'>
        <span>ویژه ی سطح طلایی</span>
        <button className='stroke-neutral-800 text-neutral-800 cursor-pointer flex flex-row items-center space-x-2'>
          <span><p className='inline p-0 m-0 text-secondary-2'>{item.points}</p> امتیاز</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CreditCard