import React from 'react'
import Landing_title from '../../Components/Landing_title/Landing_title'
import Customer_Club_Introduction from '../../Components/Customer_Club_Introduction/Customer_Club_Introduction'

import Quantum_Card_Box from '../../Components/Quantum_Card_Box/Quantum_Card_Box'
import Route_Guide_Quantum from '../../Components/Route_Guide_Quantum/Route_Guide_Quantum'

import Quantum_Level_1 from '../../assets/images/Quantum_Levels/Quantum_Level_1.png'
import Quantum_Level_2 from '../../assets/images/Quantum_Levels/Quantum_Level_2.png'
import Quantum_Level_3 from '../../assets/images/Quantum_Levels/Quantum_Level_3.png'
import Quantum_Level_4 from '../../assets/images/Quantum_Levels/Quantum_Level_4.png'
import Quantum_Level_5 from '../../assets/images/Quantum_Levels/Quantum_Level_5.png'
import Quantum_Level_6 from '../../assets/images/Quantum_Levels/Quantum_Level_6.png'



function LandingPage() {

  return (
    <div className='LandingPage px-4 flex flex-col justify-start items-center' dir='rtl'>
      <div className='w-full h-auto'>

        <Landing_title />

        <Customer_Club_Introduction />

        <Quantum_Card_Box />

        <Route_Guide_Quantum />

        <div className='Quantum_Levels mt-26 container 2xl:w-2/3 w-full mx-auto'>

          <div className='Quantum_Levels_Title flex flex-col gap-y-6 text-center w-2/3 mx-auto'>
            <span className='text-4xl'>سطــوح کــوآنتــوم</span>
            <span className='text-lg'>کوانتوم فقط یک باشگاه مشتریان نیست، بلکه یک مسیر صعودی است در منظومه‌ای از فرصت‌ها و امتیازها.</span>
            <p>از سطح ماه تا خورشید، هر خرید تو را به سیاره‌ای جدید نزدیک‌تر می‌کند و در هر مرحله، مزایا، تخفیف‌ها و پاداش‌هایی در انتظار توست. این سفر، برای قدرشناسی از همراهی تو طراحی شده؛ چون تو سزاوار تجربه‌ای متفاوتی.</p>
          </div>

          <div className='Quantum_Levels_Card w-full h-auto mt-8'>
            <div className='w-full h-auto grid grid-cols-12 gap-12'>
              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <div className='w-full h-full bg-[#313131] p-6 rounded-xl'>
                  <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
                    <div className='Quantum_Levels_Card_img bg-[#313131] flex justify-center items-center h-2/3 rounded-xl'>
                      <img className='w-2/3' src={Quantum_Level_1} alt="" />
                    </div>
                    <div className='Quantum_Levels_Card_Content w-full h-1/3 flex flex-col justify-center items-end px-4 mt-4 gap-y-4'>
                      <div className='w-full flex flex-row justify-between items-center text-lg'>
                        <span>سطح 1</span>
                        <span>اورانوس</span>
                      </div>
                      <span> 0 تا 5،000 </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <div className='w-full h-full bg-[#95C5C5] p-6 rounded-xl'>
                  <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
                    <div className='Quantum_Levels_Card_img bg-[#95C5C5] flex justify-center items-center h-2/3 rounded-xl'>
                      <img className='w-2/3' src={Quantum_Level_2} alt="" />
                    </div>
                    <div className='Quantum_Levels_Card_Content w-full h-1/3 flex flex-col justify-center items-end px-4 mt-4 gap-y-4'>
                      <div className='w-full flex flex-row justify-between items-center text-lg'>
                        <span>سطح 1</span>
                        <span>اورانوس</span>
                      </div>
                      <span> 0 تا 5،000 </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <div className='w-full h-full bg-[#B7AA87] p-6 rounded-xl'>
                  <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
                    <div className='Quantum_Levels_Card_img bg-[#B7AA87] flex justify-center items-center h-2/3 rounded-xl'>
                      <img className='w-2/3' src={Quantum_Level_3} alt="" />
                    </div>
                    <div className='Quantum_Levels_Card_Content w-full h-1/3 flex flex-col justify-center items-end px-4 mt-4 gap-y-4'>
                      <div className='w-full flex flex-row justify-between items-center text-lg'>
                        <span>سطح 1</span>
                        <span>اورانوس</span>
                      </div>
                      <span> 0 تا 5،000 </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <div className='w-full h-full bg-[#9B4A1B] p-6 rounded-xl'>
                  <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
                    <div className='Quantum_Levels_Card_img bg-[#9B4A1B] flex justify-center items-center h-2/3 rounded-xl'>
                      <img className='w-2/3' src={Quantum_Level_4} alt="" />
                    </div>
                    <div className='Quantum_Levels_Card_Content w-full h-1/3 flex flex-col justify-center items-end px-4 mt-4 gap-y-4'>
                      <div className='w-full flex flex-row justify-between items-center text-lg'>
                        <span>سطح 1</span>
                        <span>اورانوس</span>
                      </div>
                      <span> 0 تا 5،000 </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <div className='w-full h-full bg-[#B5843F] p-6 rounded-xl'>
                  <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
                    <div className='Quantum_Levels_Card_img bg-[#B5843F] flex justify-center items-center h-2/3 rounded-xl'>
                      <img className='w-2/3' src={Quantum_Level_5} alt="" />
                    </div>
                    <div className='Quantum_Levels_Card_Content w-full h-1/3 flex flex-col justify-center items-end px-4 mt-4 gap-y-4'>
                      <div className='w-full flex flex-row justify-between items-center text-lg'>
                        <span>سطح 1</span>
                        <span>اورانوس</span>
                      </div>
                      <span> 0 تا 5،000 </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <div className='w-full h-full bg-[#F2BE4F] p-6 rounded-xl'>
                  <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
                    <div className='Quantum_Levels_Card_img bg-[#F2BE4F] flex justify-center items-center h-2/3 rounded-xl'>
                      <img className='w-2/3' src={Quantum_Level_6} alt="" />
                    </div>
                    <div className='Quantum_Levels_Card_Content w-full h-1/3 flex flex-col justify-center items-end px-4 mt-4 gap-y-4'>
                      <div className='w-full flex flex-row justify-between items-center text-lg'>
                        <span>سطح 1</span>
                        <span>اورانوس</span>
                      </div>
                      <span> 0 تا 5،000 </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LandingPage