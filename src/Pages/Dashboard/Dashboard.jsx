import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import dashboard_header_img from '../../assets/images/img-banner-dashboard.png'
import Quantum_Level_1 from '../../assets/images/Quantum_Levels/Quantum_Level_1.png'
import User_Account_Info_Card from '../../Components/User_Account_Info_Card/User_Account_Info_Card'

function Dashboard() {
  return (
    <MainLayout>
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
        <div className='dashboard_body w-full h-full'>

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

          <div className='inviteContainer'></div>
          <div></div>

        </div>

      </div>
    </MainLayout>
  )
}

export default Dashboard