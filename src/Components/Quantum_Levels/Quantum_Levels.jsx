import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules'

import Quantum_Level_1 from '../../assets/images/Quantum_Levels/Quantum_Level_1.png'
import Quantum_Level_2 from '../../assets/images/Quantum_Levels/Quantum_Level_2.png'
import Quantum_Level_3 from '../../assets/images/Quantum_Levels/Quantum_Level_3.png'
import Quantum_Level_4 from '../../assets/images/Quantum_Levels/Quantum_Level_4.png'
import Quantum_Level_5 from '../../assets/images/Quantum_Levels/Quantum_Level_5.png'
import Quantum_Level_6 from '../../assets/images/Quantum_Levels/Quantum_Level_6.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Planet_Card from '../Planet_Card/Planet_Card';

function Quantum_Levels() {

  const Planet_Card_Value = [
    { id: 1, color: '#313131', src: Quantum_Level_1, title: 'اورانوس', level: 1, firstNum: 0, lastNum: 5000 },
    { id: 2, color: '#95C5C5', src: Quantum_Level_2, title: 'اورانوس', level: 2, firstNum: 5000, lastNum: 15000 },
    { id: 3, color: '#B7AA87', src: Quantum_Level_3, title: 'اورانوس', level: 3, firstNum: 15000, lastNum: 50000 },
    { id: 4, color: '#9B4A1B', src: Quantum_Level_4, title: 'اورانوس', level: 4, firstNum: 50000, lastNum: 125000 },
    { id: 5, color: '#B5843F', src: Quantum_Level_5, title: 'اورانوس', level: 5, firstNum: 125000, lastNum: 250000 },
    { id: 6, color: '#F2BE4F', src: Quantum_Level_6, title: 'اورانوس', level: 6, firstNum: 250000, lastNum: 'بی نهایت' }
  ]

  return (
    <>
      <div className='Quantum_Levels mt-26 container 2xl:w-4/7 w-full mx-auto'>

        <div className='Quantum_Levels_Title flex flex-col gap-y-6 text-center w-full mx-auto'>
          <span className='md:text-4xl text-xl text-secondary-3'>سطــوح کــوآنتــوم</span>
          <span className='md:text-lg text-md text-neutral-700 leading-7'>کوانتوم فقط یک باشگاه مشتریان نیست، بلکه یک مسیر صعودی است در منظومه‌ای از فرصت‌ها و امتیازها.</span>
          <p className='text-neutral-400 md:text-[16px] text-sm leading-7'>از سطح ماه تا خورشید، هر خرید تو را به سیاره‌ای جدید نزدیک‌تر می‌کند و در هر مرحله، مزایا، تخفیف‌ها و پاداش‌هایی در انتظار توست. این سفر، برای قدرشناسی از همراهی تو طراحی شده؛ چون تو سزاوار تجربه‌ای متفاوتی.</p>
        </div>

        <div className='Quantum_Levels_Card w-full h-auto mt-8'>
          <div className='w-full h-auto hidden md:grid grid-cols-12 gap-6'>

            {Planet_Card_Value.map(item =>
              <div className='lg:col-span-4 md:col-span-6 col-span-8'>
                <Planet_Card key={item.id} {...item} style='min-h-[350px] max-h-[350px]' />
              </div>
            )}

          </div>

          <div className="block md:hidden">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={16}
              slidesPerView={1}
              navigation
              pagination={false}
              a11y={{ enabled: true }}
              loop={false}

            >
              {Planet_Card_Value.map(item => (
                <SwiperSlide key={item.id}>
                  <>
                    <div className={`Planet_Card w-[250px] h-[290px] bg-[${item.color}] p-6 rounded-xl m-auto`}>
                      <div className=' w-full h-full flex flex-col justify-start bg-white rounded-2xl p-4'>
                        <div className={`Quantum_Levels_Card_img bg-[${item.color}] flex justify-center items-center h-8/12 rounded-xl`}>
                          <img className='w-2/3' src={item.src} alt={''} />
                        </div>
                        <div className='Quantum_Levels_Card_Content w-full h-4/12 flex flex-col justify-center items-end px-4 mt-2 gap-y-4'>
                          <div className='w-full flex flex-row justify-between items-center text-lg'>
                            <span>{item.level}</span>
                            <span>{item.title}</span>
                          </div>
                          <span className='text-neutral-400'>
                            {item.firstNum} تا {item.lastNum}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

      </div>
    </>
  )
}

export default Quantum_Levels