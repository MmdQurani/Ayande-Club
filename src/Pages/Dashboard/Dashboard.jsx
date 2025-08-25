import React from 'react'
import User_Account_Info_Card from '../../Components/User_Account_Info_Card/User_Account_Info_Card'
import useIsMobile from '../../Hooks/useIsMobile'

import dashboard_header_img from '../../assets/images/img-banner-dashboard.png'
import Quantum_Level_1 from '../../assets/images/Quantum_Levels/Quantum_Level_1.png'
import Quantum_Level_mini from '../../assets/images/Quantum_Levels/Quantum_Level_mini.png'
import RewardContainer from '../../Components/RewardContainer/RewardContainer'
import usePrimaryModal from '../../Hooks/usePrimaryModal'
import PrimaryModal from '../../Components/Modals/PrimaryModal'

function Dashboard() {

  const isIPad = useIsMobile(767)

  const { isModalOpen, selectedReward, openModal, closeModal } = usePrimaryModal();

  return (
    <div className='dashboard w-full h-full flex flex-col py-4 space-y-4' dir='rtl'>

      {/*  هدر صفحه داشبورد */}
      <div className='dashboard_header w-full min-h-[180px] rounded-lg flex flex-row justify-around items-center'>

        <div className='dashboard_header_content flex flex-col items-start space-y-4 md:mr-12 mr-4 w-max'>
          <span className='text-secondary-5 sm:text-2xl text-sm select-none'>قـــرعه کشــی ماهانه ســود آینـده</span>
          <span className='text-secondary-3 sm:text-2xl text-sm select-none'>امـــتیازهات رو تبدیل به شانس کن...</span>
          <button className='bg-secondary-4 sm:text-lg text-sm text-secondary-3 px-6 py-2 rounded-lg cursor-pointer'>نتایج قرعه کـشی</button>
        </div>


        <div className='dashboard_header_img h-full sm:max-w-[240px] max-w-[120px] flex-1 flex items-center md:ml-12 ml-4'>
          <img className='w-full h-full object-contain select-none' src={dashboard_header_img} alt="dashboard_header_img" />
        </div>
      </div>

      {/* محتوای صفحه داشبورد */}
      <div className='dashboard_body w-full h-max space-y-4'>

        {!isIPad ?
          <div className='user_account_info w-full max-h-max md:max-h-[229px] min-h-[229px] flex flex-col md:flex-row space-x-2'>

            <div className='Quantum_Level_User_md hidden md:flex min-h-full w-[215px]'>
              <div className={`Planet_Card min-h-full flex p-6 rounded-xl bg-neutral-700`}>
                <div className=' w-full min-h-full bg-white rounded-2xl p-4'>
                  <div className={`Quantum_Levels_Card_img flex justify-center items-center h-8/12 rounded-xl bg-neutral-700`} >
                    <img className='w-4/5 2xl:w-4/5' src={Quantum_Level_1} alt="Quantum_Level_1" />
                  </div>
                  <div className='Quantum_Levels_Card_Content w-full h-4/12 flex flex-col justify-center items-end px-4 mt-2 gap-y-4'>
                    <div className='w-full flex flex-row justify-between items-center text-lg'>
                      <span className='text-xs'>سیاره اول</span>
                      <span className='text-xs'>ماه</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='Quantum_Level_User_sm flex flex-row justify-around md:hidden mt-4 bg-white w-full h-[120px] space-x-2 order-2 border-1 border-neutral-200 rounded-xl px-4'>
              <div className='w-max h-full flex flex-col space-y-3 justify-center'>
                <span className='text-sm'>بر روی <p className='text-3xl inline m-0 p-0' >ماه</p> به سر میبرید</span>
                <span className='text-sm'>سطح کاربری شما در کوانتوم</span>
              </div>
              <div className='flex-1 h-full flex justify-end'>
                <img src={Quantum_Level_1} className='h-full object-contain' alt="" />
              </div>
            </div>

            <div className='user_account_info_content w-full md:flex-1 min-h-full border-1 border-neutral-200 bg-white rounded-xl py-4'>
              <div className='w-full h-full grid grid-cols-12 md:space-y-0 space-y-12'>

                <div className='col-span-12 md:col-span-6 border-0 md:border-l-1 border-neutral-200'>
                  <User_Account_Info_Card />
                </div>

                <div className='col-span-12 md:col-span-6 border-0 md:border-l-1 border-neutral-200'>
                  <User_Account_Info_Card />
                </div>

              </div>
            </div>
          </div>
          :
          <div className='user_account_info w-full h-max px-2 space-y-4'>
            <div className='w-full h-[120px] flex flex-row items-center space-x-2 p-6 bg-white Quantum_Card rounded-xl'>
              <div className='flex flex-col min-w-0 flex-1 space-y-4'>
                <span className='text-[16px] no-break-ellipsis text-neutral-800'>مهدی صالح زاده ابرقویی</span>
                <span className='text-sm text-neutral-500'>مجموع سیارات شما</span>
              </div>
              <div className='w-[140px] h-[56px] px-4 flex flex-row justify-around items-center bg-gray-100 rounded-xl'>
                <span className='text-3xl'>100</span>
                <img className='w-[70px]' src={Quantum_Level_mini} alt="" />
              </div>
            </div>

            <div className='w-full h-[120px] flex flex-row items-center pr-4 space-x-2 bg-white Quantum_Card rounded-xl'>
              <div className='flex flex-col min-w-0 flex-1 space-y-4'>
                <span className='text-sm no-break-ellipsis text-neutral-800'>بر روی <p className='m-0 p-0 text-neutral-900 inline text-3xl'>ماه</p> به سر میبرید ...</span>
                <span className='text-sm text-neutral-500'>مجموع سیارات شما</span>
              </div>
              <img className='w-[136px] object-contain' src={Quantum_Level_1} alt="" />
            </div>
          </div>
        }


        {/* دعوت دوستان */}
        <div className='inviteContainer w-full h-max min-h-[130px] flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:items-center p-4 bg-white rounded-xl border-1 border-primary space-x-2'>

          <div className='title_inviteContainer w-full sm:w-max h-full flex flex-col justify-center space-y-4'>
            <span className='text-lg'>دعوت دوستان</span>
            <span className='text-sm text-neutral-400 leading-7'>کوانتوم را به دوستان خود معرفی کنید و کسب امتیاز کنید!</span>
          </div>

          <div className='inviteContainer_btn w-full md:flex-1 h-full flex flex-row items-center justify-end px-4'>
            <div className='h-[48px] w-full flex flex-row justify-end space-x-2'>
              <div className='input_inviteContainer h-full md:max-w-[370px] w-full flex flex-row px-2 py-2 rounded-md space-x-2 bg-gray-100'>
                <input className='placeholder:text-xs w-full outline-0 placeholder:text-neutral-400 px-1 h-full' type="text" name="invite" placeholder='شماره تماس دوستان را وارد کنید' />
                <button className='bg-secondary-2 cursor-pointer text-white h-full px-4 rounded-md'>ارسال</button>
              </div>

              <div className='h-full flex flex-row space-x-2'>

                <button className='h-full w-12 rounded-md bg-gray-100 p-2 stroke-secondary-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"><path d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z" stroke-linecap="round" stroke-linejoin="round" /></svg>
                </button>

                <button className='h-full w-12 rounded-md bg-gray-100 p-2 fill-secondary-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 2.25C14.7051 2.25 13.25 3.70507 13.25 5.5C13.25 5.69591 13.2673 5.88776 13.3006 6.07412L8.56991 9.38558C8.54587 9.4024 8.52312 9.42038 8.50168 9.43939C7.94993 9.00747 7.25503 8.75 6.5 8.75C4.70507 8.75 3.25 10.2051 3.25 12C3.25 13.7949 4.70507 15.25 6.5 15.25C7.25503 15.25 7.94993 14.9925 8.50168 14.5606C8.52312 14.5796 8.54587 14.5976 8.56991 14.6144L13.3006 17.9259C13.2673 18.1122 13.25 18.3041 13.25 18.5C13.25 20.2949 14.7051 21.75 16.5 21.75C18.2949 21.75 19.75 20.2949 19.75 18.5C19.75 16.7051 18.2949 15.25 16.5 15.25C15.4472 15.25 14.5113 15.7506 13.9174 16.5267L9.43806 13.3911C9.63809 12.9694 9.75 12.4978 9.75 12C9.75 11.5022 9.63809 11.0306 9.43806 10.6089L13.9174 7.4733C14.5113 8.24942 15.4472 8.75 16.5 8.75C18.2949 8.75 19.75 7.29493 19.75 5.5C19.75 3.70507 18.2949 2.25 16.5 2.25ZM14.75 5.5C14.75 4.5335 15.5335 3.75 16.5 3.75C17.4665 3.75 18.25 4.5335 18.25 5.5C18.25 6.4665 17.4665 7.25 16.5 7.25C15.5335 7.25 14.75 6.4665 14.75 5.5ZM6.5 10.25C5.5335 10.25 4.75 11.0335 4.75 12C4.75 12.9665 5.5335 13.75 6.5 13.75C7.4665 13.75 8.25 12.9665 8.25 12C8.25 11.0335 7.4665 10.25 6.5 10.25ZM16.5 16.75C15.5335 16.75 14.75 17.5335 14.75 18.5C14.75 19.4665 15.5335 20.25 16.5 20.25C17.4665 20.25 18.25 19.4665 18.25 18.5C18.25 17.5335 17.4665 16.75 16.5 16.75Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* جوایز و هدایا */}
        {/* <div className='rewardContainer w-full h-max min-h-[290px] flex flex-col bg-white border-1 border-gray-200 rounded-2xl p-4'>
          <div className='header_reward w-full h-max flex justify-between items-center space-x-2.5 mb-4'>

            <div className='title_reward flex flex-row items-center space-x-2'>
              <div className='size-9 sm:size-12 bg-secondary-1 stroke-secondary-3 p-2 rounded-xl'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
                  <path d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span className='text-[16px] sm:text-2xl text-secondary-3'>جوایز و هدایا</span>
            </div>


            <button className='btn_reward flex flex-row items-center bg-secondary-6 px-2 py-1 sm:px-4 sm:py-2.5 cursor-pointer rounded-md sm:rounded-lg space-x-2 text-secondary-3 stroke-secondary-3'>
              <span className='text-[16px]'>مشاهده همه</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>


          <div className='content_reward max-w-full flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-4 md:overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-custom py-8 px-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div key={index} className='card_reward Quantum_Card min-w-0 md:min-w-[395px] h-[175px] flex-shrink-0 rounded-xl shadow p-4 flex flex-col items-center justify-center space-y-2'>
                <div className='card_reward_top w-full flex flex-row items-center space-x-4'>
                  <img src={dashboard_header_img} alt="product" className='w-24 h-24 object-contain mb-4' />
                  <div className='flex-1 min-w-0 flex flex-col items-start space-y-4'>
                    <span className='text-[16px] md:text-lg text-neutral-800'>هندزفری بیسیم تورو</span>
                    <span className='text-sm md:text-[16px] text-neutral-500'>مدل T20 App Edition</span>
                  </div>
                </div>
                <div className='card_reward_bottom flex-shrink-0 flex flex-row justify-between w-full'>
                  <span>مدت اعتبار :</span>
                  <button className='stroke-neutral-800 text-neutral-800 cursor-pointer flex flex-row items-center space-x-2'>
                    <span><p className='inline p-0 m-0 text-secondary-2'>7000</p> امتیاز</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                      <path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div> */}

        <RewardContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div key={index} onClick={() => openModal(item)} className='card_reward Quantum_Card min-w-0 md:min-w-[395px] h-[175px] flex-shrink-0 rounded-xl shadow p-4 flex flex-col items-center justify-center space-y-2'>
              <div className='card_reward_top w-full flex flex-row items-center space-x-4'>
                <img src={dashboard_header_img} alt="product" className='w-24 h-24 object-contain mb-4' />
                <div className='flex-1 min-w-0 flex flex-col items-start space-y-4'>
                  <span className='text-[16px] md:text-lg text-neutral-800'>هندزفری بیسیم تورو</span>
                  <span className='text-sm md:text-[16px] text-neutral-500'>مدل T20 App Edition</span>
                </div>
              </div>
              <div className='card_reward_bottom flex-shrink-0 flex flex-row justify-between w-full'>
                <span>مدت اعتبار :</span>
                <button className='stroke-neutral-800 text-neutral-800 cursor-pointer flex flex-row items-center space-x-2'>
                  <span><p className='inline p-0 m-0 text-secondary-2'>7000</p> امتیاز</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                    <path d="M15 6L9 12L15 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </RewardContainer>


      </div>

      {/* مودال */}
      <PrimaryModal isOpen={isModalOpen} onClose={closeModal}>
        {selectedReward && (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{selectedReward.title}</h2>
            <p className="mb-4">{selectedReward.desc}</p>
            <p>امتیاز مورد نیاز: {selectedReward.points}</p>
          </div>
        )}
      </PrimaryModal>

    </div>
  )
}

export default Dashboard