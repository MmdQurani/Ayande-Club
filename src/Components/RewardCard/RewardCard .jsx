import React from 'react';
// import dashboard_header_img from '../../assets/images/img-banner-dashboard.png'
import AwardImage from '../AwardImage/AwardImage';

const RewardCard = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='card_reward Quantum_Card min-w-0 md:min-w-[395px] md:max-w-[395px] h-[175px] flex-shrink-0 rounded-xl shadow p-4 flex flex-col items-center justify-center space-y-2 cursor-default'
    >
      <div className='card_reward_top w-full flex flex-row items-center space-x-4'>
        {/* <img src={dashboard_header_img} alt="product" className='w-24 h-24 object-contain mb-4' /> */}
        <AwardImage imagePath={item.imagePath} />
        <div className='flex-1 min-w-0 flex flex-col items-start space-y-4'>
          <span className='text-[16px] text-neutral-800'>{item.title}</span>
          <span className='text-sm text-neutral-500'>{item.subtitle}</span>
        </div>
      </div>
      <div className='card_reward_bottom flex-shrink-0 flex flex-row justify-between w-full'>
        <span>مدت اعتبار :</span>
        <button className='stroke-neutral-800 text-neutral-800 cursor-pointer flex flex-row items-center space-x-2'>
          <span><p className='inline p-0 m-0 text-secondary-2'>{item.points}</p> امتیاز</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
