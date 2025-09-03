import React from 'react'
import dashboard_header_img from '../../assets/images/img-banner-dashboard.png'
import AwardImage from '../AwardImage/AwardImage'

function CardLottery({ item, onClick }) {
  return (
    <div className='w-full h-full cursor-default shadow_custom rounded-xl'>
      <div
        onClick={onClick}
        className=' min-w-0 md:min-w-[395px] md:max-w-[395px] h-[175px] flex-shrink-0 p-4 flex flex-col items-center justify-center space-y-2'
      >
        <div className='card_reward_top w-full flex flex-row items-center space-x-4'>
          {/* <img src={dashboard_header_img} alt="product" className='w-24 h-24 object-contain mb-4' /> */}
          <AwardImage imagePath={item.imagePath} />
          <div className='flex-1 min-w-0 flex flex-col items-start space-y-2'>
            <span className='text-sm text-neutral-800'>{item.title}</span>
          </div>
        </div>
        <div className='card_reward_bottom flex-shrink-0 flex flex-row justify-between w-full'>
          <span>5 شانس قرعه‌کشی</span>
          <button className='stroke-neutral-800 text-neutral-800 cursor-pointer flex flex-row items-center space-x-2'>
            <span><p className='inline p-0 m-0 text-secondary-2'>{item.pointCost}</p> امتیاز</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='w-full h-[45px] bg-white rounded-lg border-t-2 border-dashed border-neutral-200 flex flex-row justify-between items-center px-4'>
        <span className='text-xs text-neutral-400'>زمان باقی‌مانده تا قرعه‌کشی</span>
        <div className='flex flex-row items-center space-x-4'>
          <span className='text-xs text-neutral-700'>12ساعت</span>
          <p>:</p>
          <span className='text-xs text-neutral-700'>12 روز</span>
        </div>
      </div>
    </div>
  )
}

export default CardLottery