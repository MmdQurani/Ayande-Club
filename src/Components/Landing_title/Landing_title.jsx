import React from 'react'
import Planet from '../../assets/images/Planet/Landing_Planet.png'

function Landing_title() {
  return (
    <div className='Landing_title flex justify-center'>
      <div className='container flex flex-row mr-8 xl:px-40'>
        <div className='sm:w-1/2 sm:min-w-1/2 w-2/3 h-[389px] sm:h-[489px] md:h-[526px] lg:h-[626px] 2xl:h-[726px] title_box flex flex-col justify-center md:justify-start items-start gap-y-6 flex-nowrap m-0 xl:pr-16'>

          <div className='flex flex-col justify-center items-start w-full h-4/5 gap-y-6 flex-nowrap'>
            <span className='lg:text-4xl text-3xl text-secondary-3'>باشگاه کوآنتوم</span>

            <span className='lg:text-2xl text-lg text-secondary-2'>مدار جدیدی از امتیاز و فرصت‌های ویژه</span>

            <p className='p-0 m-0 lg:text-lg text-md leading-7 text-gray-600'>معــامله کنید، امتیــاز کسب کنید و از جوایز نقدی و غیرنقدی منحصر به فرد بهره‌مند شوید.</p>

            <button className='bg-secondary-3 text-white lg:px-6 px-4 lg:py-3 py-2 rounded-lg cursor-pointer'>ورود به دنیای کوانتوم</button>
          </div>
        </div>

        {/* <div className='img_box flex justify-end items-center flex-1 m-0 xl:pl-16'>
          <img className='lg:w-124 min-w-96' src={Planet} alt="عکس لندیگ" />
        </div> */}
      </div>
    </div>
  )
}

export default Landing_title