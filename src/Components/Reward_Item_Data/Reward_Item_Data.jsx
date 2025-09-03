import React from 'react'
import Snapp_logo from '../../assets/images/reward/Snapp_logo.png'
import AwardImage from '../AwardImage/AwardImage'

function Reward_Item_Data({ selectedReward , closeModal }) {
  return (
    <div className="reward_item_data w-full h-full flex flex-col justify-start items-center space-y-8 mt-2">

      <div className='reward_item_data_header w-full md:h-[64px] h-max flex flex-col md:flex-row space-y-4 md:space-y-0'>
        <div className='reward_item_data_header_title flex-1 min-w-0 flex flex-row md:justify-start justify-between items-center space-x-4 px-2'>
          <div className='reward_item_data_img w-[145px] md:w-[170px] h-full rounded-lg flex justify-center items-center border-1 border-gray-100'>
            {/* <img src={selectedReward.imagePath} className='object-contain' alt="" /> */}
            <AwardImage imagePath={selectedReward.imagePath} />
          </div>
          <div className='reward_item_data_title max-w-[200px] flex flex-col space-y-2'>
            <span className='text-sm text-neutral-800'>{selectedReward.title}</span>
          </div>
        </div>

        <div className='reward_item_data_header_points w-full md:w-[165px] h-[36px] md:h-full flex flex-row md:flex-col justify-between md:justify-center md:items-end items-center gap-y-2 gap-x-4'>
          {/* <span className="text-gray-500 w-max">
            <p className="inline p-0 m-0 ml-2 text-white bg-badge-1 px-2 py-0.5 rounded-full text-xs decoration-none">
              50%
            </p>
            <span className="line-through">500.000.000</span>
          </span> */}

          <button className='text-sm cursor-pointer border-1 border-secondary-2 text-secondary-2  w-[153px] md:w-full h-[32px] px-1 rounded-lg'>
            {selectedReward.pointCost} امتیاز
          </button>

        </div>
      </div>

      <div className="reward_item_data_body w-full h-full max-h-full overflow-y-auto scrollbar-custom px-2">

        <div className='description_reward_item border-b-1 border-neutral-300 pb-6'>
          <span className='text-sm flex flex-row items-center text-neutral-800 '>
            {selectedReward.title}
          </span>
          <p className='text-sm mt-2.5 text-neutral-500 leading-8'>
            {selectedReward.description}
          </p>
        </div>

        <div className='help_reward_item mt-8 h-max py-4'>
          <span className='text-sm text-neutral-900 mb-2 block'>نحوه استفاده از جایزه :</span>
          <p className='text-sm text-neutral-500 leading-8 mb-12'>{selectedReward.howToUse}</p>
          <span className='text-sm text-neutral-900 mb-2 block'>قوانین استفاده:</span>
          <p className='text-sm text-neutral-500 leading-8'>{selectedReward.rules}</p>
        </div>
      </div>

      <div className='w-full h-[46px] flex flex-row justify-between items-center gap-x-8'>
        <button onClick={closeModal} className='w-1/2 sm:w-[125px] text-[16px] h-full border-1 border-secondary-2 text-secondary-2 rounded-md cursor-pointer'>انصراف</button>
        <button className='w-1/2 sm:w-[250px] text-[16px] h-full btn_gradient rounded-md text-white cursor-pointer'>دریافت هدیه</button>
      </div>

    </div>
  )
}

export default Reward_Item_Data