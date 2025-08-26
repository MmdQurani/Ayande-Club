import React, { useState } from 'react';
import useIsMobile from '../../Hooks/useIsMobile';

import Manage_Points from '../../Components/Manage_Points/Manage_Points';
import RewardContainer from '../../Components/RewardContainer/RewardContainer';

import dashboard_header_img from '../../assets/images/img-banner-dashboard.png'
import gift_01 from '../../assets/icons/gift-01.png'
import monitor_03 from '../../assets/icons/monitor-03.png'
import Rectangle1 from '../../assets/icons/Rectangle1.png'
import rocket_02 from '../../assets/icons/rocket-02.png'
import notFound_credit from '../../assets/icons/notFound_credit.png'
import Insufficient_Credit from '../../assets/icons/Insufficient_Credit.png'

import PrimaryModal from '../../Components/Modals/PrimaryModal';
import usePrimaryModal from '../../Hooks/usePrimaryModal';
import Reward_Item_Data from '../../Components/Reward_Item_Data/Reward_Item_Data';
import Credit_Modal from '../../Components/Modals/Credit_Modal/Credit_Modal';
import Success_Credit_Modal from '../../Components/Modals/Success_Credit_Modal/Success_Credit_Modal';
import RewardCard from '../../Components/RewardCard/RewardCard ';
import CardLottery from '../../Components/CardLottery/CardLottery';
import CreditCard from '../../Components/CreditCard/CreditCard';
import CoursesCard from '../../Components/CoursesCard/CoursesCard';

function Rewards() {

  const { isModalOpen, selectedReward, modalType, openModal, closeModal } = usePrimaryModal();
  const isIPad = useIsMobile(767)

  const [showAllSections, setShowAllSections] = useState(false);

  return (
    <div className="rewards w-full h-full flex flex-col py-4 space-y-4 px-2" dir='rtl'>
      {/* 1: مدیریت امتیاز */}
      {!isIPad ?

        <Manage_Points />

        : null}

      <RewardContainer title='جوایز و هدایا' search={true} filtering={true} styleIcon={'bg-transparent'} icon={gift_01}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <RewardCard
            key={index}
            item={{ title: 'هندزفری بیسیم تورو', subtitle: 'مدل T20 App Edition', points: '7000' }}
            onClick={() => openModal('rewards', item)} />
        ))}
      </RewardContainer>

      {isIPad ?
        <button onClick={() => setShowAllSections(true)} className={`w-full h-[48px] cursor-pointer border-2 border-secondary-5 text-secondary-5 stroke-secondary-5 ${showAllSections ? 'hidden' : 'flex'} flex-row justify-center items-center space-x-4 rounded-lg`}>
          <span>مشاهده همه</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        : null}

      {(!isIPad || showAllSections) && (
        <>
          {/* قرعه کشی */}
          <RewardContainer title='قرعه‌کشی‌ها' style={'bg-gradient-to-b from-white via-white/80 to-transparent'} styleIcon={'bg-transparent'} icon={Rectangle1}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <CardLottery
                key={index}
                item={{ title: 'هندزفری بیسیم تورو', subtitle: 'مدل T20 App Edition', points: '7000' }}
                onClick={() => openModal('lottery', item)} />
            ))}
          </RewardContainer>

          {/* اعتبار */}
          <RewardContainer title='اعتبار' style={'bg-gradient-to-b from-white via-white/80 to-transparent'} styleIcon={'bg-transparent'} icon={rocket_02}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <CreditCard
                key={index}
                item={{ title: 'هندزفری بیسیم تورو', subtitle: 'مدل T20 App Edition', points: '7000' }}
                onClick={() => openModal('credit', item)} />
            ))}
          </RewardContainer>

          {/* دوره های آموزشی */}
          <RewardContainer title='دوره‌های آموزشی' style={'bg-gradient-to-b from-white via-white/80 to-transparent'} styleIcon={'bg-transparent'} icon={monitor_03}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <CoursesCard
                key={index}
                item={{ title: 'هندزفری بیسیم تورو', subtitle: 'مدل T20 App Edition', points: '7000' }}
                onClick={() => openModal('courses', item)} />
            ))}
          </RewardContainer>
        </>
      )}

      {/* مودال جوایز و هدایا */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'rewards'}
        onClose={closeModal}
        style={'w-[755px] h-[745px] max-h-[90%]'}
        mobileStyle={'h-[945px]'}
      >
        {selectedReward && <Reward_Item_Data />}
      </PrimaryModal>

      {/* مودال قرعه‌کشی */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'lottery'}
        onClose={closeModal}
        style={'w-[755px] h-[745px] max-h-[90%]'}
        mobileStyle={'h-[945px]'}
      >
        {selectedReward && <Reward_Item_Data />}
      </PrimaryModal>

      {/* مودال کمبود امتیاز */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'Insufficient_Credit'}
        onClose={closeModal}
        style={'w-[500px] h-[325px] max-h-[70%]'}
        mobileStyle={'h-[405px]'}
      >
        {selectedReward &&
          <div className='notFound_credit w-full h-full flex flex-col justify-around items-center'>
            <img className='w-[84px] object-contain' src={Insufficient_Credit} alt="" />
            <span className='text-[16px] text-secondary-3'>تعداد سیارات شما کم است !</span>
            <span className='text-sm mb-6 mt-4'>برای تکمیل نیازهای خود، به سیارات بیشتری نیاز دارید.</span>
            <button onClick={() => openModal('notFound_credit', selectedReward)} className='w-[250px] text-[16px] h-[42px] btn_gradient rounded-md text-white cursor-pointer'>نحوه کسب سیاره</button>
          </div>
        }
      </PrimaryModal>

      {/* مودال اعتبار */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'credit'}
        onClose={closeModal}
        style={'w-[755px] h-[480px] max-h-[70%]'}
        mobileStyle={'h-[538px]'}
      >
        {selectedReward &&
          <Credit_Modal>
            <div className='w-full h-[36px] flex flex-row justify-between items-center gap-x-8'>
              <button className='w-1/2 sm:w-[125px] text-[16px] h-full border-1 border-secondary-2 text-secondary-2 rounded-md cursor-pointer'>انصراف</button>
              <button onClick={() => openModal('notFound_credit', selectedReward)} className='w-1/2 sm:w-[250px] text-[16px] h-full btn_gradient rounded-md text-white cursor-pointer'>ثبت درخواست</button>
            </div>
          </Credit_Modal>
        }
      </PrimaryModal>

      {/* مودال ثبت موفق  */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'success_credit'}
        onClose={closeModal}
        style={'w-[755px] h-[685px] max-h-[85%]'}
        mobileStyle={'h-[635px]'}
      >
        {selectedReward &&
          <Success_Credit_Modal />
        }
      </PrimaryModal>

      {/* مودال مورد نظر در سیستم ثبت نشده */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'notFound_credit'}
        onClose={closeModal}
        style={'w-[500px] h-[325px] max-h-[85%]'}
        mobileStyle={'h-[405px]'}
      >
        {selectedReward &&
          <div className='notFound_credit w-full h-full flex flex-col justify-around items-center'>
            <img className='w-[130px] object-contain' src={notFound_credit} alt="" />
            <span>این مورد در سیستم ثبت نشده است.</span>
            <button onClick={() => openModal('notFound_credit', selectedReward)} className='w-[250px] text-[16px] h-[42px] btn_gradient rounded-md text-white cursor-pointer'>نحوه کسب سیاره</button>
          </div>
        }
      </PrimaryModal>

      {/* مودال دوره‌های آموزشی */}
      <PrimaryModal
        isOpen={isModalOpen && modalType === 'courses'}
        onClose={closeModal}
        style={'w-[755px] h-[745px] max-h-[90%]'}
        mobileStyle={'h-[945px]'}
      >
        {selectedReward && <Reward_Item_Data />}
      </PrimaryModal>


    </div>
  );
}

export default Rewards;
