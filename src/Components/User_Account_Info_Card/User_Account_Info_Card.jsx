import React from 'react'

function User_Account_Info_Card() {
  return (
    <>
      <div className='User_Account_Info_Card w-full h-full flex flex-col xl:px-18 px-4 md:space-y-0 space-y-12 justify-around items-center'>
        <div className='w-full flex flex-row justify-between items-center'>
          <span className='text-[16px] text-neutral-600'>امتیازات من</span>
          <span className='text-2xl text-neutral-900'>600</span>
        </div>
        <div className='w-full flex flex-row justify-between items-center'>
          <span className='text-[16px] text-neutral-600'>امتیازات من</span>
          <span className='text-2xl text-neutral-900'>600</span>
        </div>
        <button className='bg-secondary-6 w-full py-2.5 rounded-lg text-secondary-3 stroke-secondary-3 cursor-pointer flex flex-row justify-between px-2.5'>
          <span>نحوه‌ی کسب سیاره</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default User_Account_Info_Card