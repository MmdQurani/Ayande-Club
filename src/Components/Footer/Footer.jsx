import React from 'react'
import { Link } from 'react-router-dom'

import footer_logo from '../../assets/images/logo/footer_logo.png'

import location from '../../assets/icons/footer/location.png'
import call_calling from '../../assets/icons/footer/call_calling.png'
import world_share from '../../assets/icons/footer/world_share.png'

import arrow_left from '../../assets/icons/arrow_left.png'

import telegram from '../../assets/icons/media/telegram.png'
import linkedin from '../../assets/icons/media/linkedin.png'
import instagram from '../../assets/icons/media/instagram.png'
import aparat from '../../assets/icons/media/aparat.png'

function Footer() {
  return (
    <footer className='w-full h-auto mt-26 text-center px-1.5'>
      <div className='container mx-auto min-h-[789px] flex flex-col items-center justify-center gap-y-8 pt-22 pb-6'>
        <span className='md:text-4xl text-lg text-secondary-3 md:leading-14 leading-8' dir='rtl'>به دنیای کوآنتوم قدم بگذارید و آغازگر سفر پاداش‌های منحصر به فرد خود باشید !</span>
        <button className='bg-white px-8 py-3 cursor-pointer md:text-xl text-sm rounded-lg shadow-lg mb-6'>ورود به دنیای کوانتوم</button>

        <div className='footer_content backdrop-blur-md bg-neutral-900/15 hidden md:flex flex-row justify-between gap-x-6 w-full min-h-[230px] text-white px-12 py-6 rounded-xl'>
          <div className='left_box_footer lg:w-[20%] md:w-[35%] flex flex-col items-start'>
            <Link to={'/'} className='bg-neutral-900/35 w-full flex flex-row-reverse justify-between px-4 py-2 rounded-full'>
              <div className='flex flex-row-reverse gap-x-1'>
                <img className='size-6 object-contain' src={world_share} alt="locworld_shareation" />
                <span>سایت کارگزاری</span>
              </div>
              <img className='size-6 object-contain' src={arrow_left} alt="arrow_left" />
            </Link>

            <div className='w-full h-full flex flex-row justify-between flex-wrap items-center'>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={telegram} alt="locworld_shareation" />
                  <span>تلگرام</span>
                </Link>
              </div>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={instagram} alt="locworld_shareation" />
                  <span>اینستاگرام</span>
                </Link>
              </div>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={aparat} alt="locworld_shareation" />
                  <span>آپارات</span>
                </Link>
              </div>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={linkedin} alt="locworld_shareation" />
                  <span>لینکدین</span>
                </Link>
              </div>
            </div>

          </div>

          <div className='right_box_footer text-end flex-1 flex flex-col items-end justify-around'>
            <img className='w-[90px] h-[36px] object-contain' src={footer_logo} alt="logo" />

            <div className='flex flex-row-reverse gap-x-2'>
              <img className='size-6 object-contain' src={location} alt="location" />
              <span className='text-[16px]'>ساختمان مرکزی : تهران، بلوار نلسون ماندلا، نبش آرش غربی، پلاک 113</span>
            </div>
            <div className='flex flex-row-reverse gap-x-2'>
              <img className='size-6 object-contain' src={call_calling} alt="call_calling" />
              <a href='tel:021362125543' className='text-[16px]'>شماره تماس : 3652149-021</a>
            </div>
          </div>
        </div>

        <div className='footer_content backdrop-blur-md bg-neutral-900/15 md:hidden flex flex-col px-4 py-6 rounded-xl text-white'>
          <div className='left_box_footer lg:w-[20%] md:w-[35%] flex flex-row justify-between items-start'>
            <Link to={'/'} className='bg-neutral-900/35 min-w-[130px] text-white flex flex-row-reverse justify-between px-4 py-2 rounded-full'>
              <div className='flex flex-row-reverse gap-x-1'>
                <img className='size-6 object-contain' src={world_share} alt="locworld_shareation" />
                <span>سایت کارگزاری</span>
              </div>
              <img className='size-6 object-contain' src={arrow_left} alt="arrow_left" />
            </Link>

            <img className='w-[90px] h-[36px] object-contain' src={footer_logo} alt="logo" />
          </div>

          <div className='right_box_footer text-end flex-1 flex flex-col items-end justify-around gap-6 mt-8'>

            <div className='flex flex-row-reverse gap-x-2'>
              <img className='size-6 object-contain' src={location} alt="location" />
              <span className='md:text-[16px] text-sm'>ساختمان مرکزی : تهران، بلوار نلسون ماندلا، نبش آرش غربی، پلاک 113</span>
            </div>
            <div className='flex flex-row-reverse gap-x-2'>
              <img className='size-6 object-contain' src={call_calling} alt="call_calling" />
              <span className='md:text-[16px] text-sm'>شماره تماس : 3652149-021</span>
            </div>

            <div className='w-full h-full flex flex-row justify-between flex-wrap items-center mt-4 gap-y-8'>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={telegram} alt="locworld_shareation" />
                  <span>تلگرام</span>
                </Link>
              </div>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={instagram} alt="locworld_shareation" />
                  <span>اینستاگرام</span>
                </Link>
              </div>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={aparat} alt="locworld_shareation" />
                  <span>آپارات</span>
                </Link>
              </div>
              <div className='min-w-[50%] flex justify-center'>
                <Link to={'/'} className='flex flex-row-reverse gap-x-1 w-max'>

                  <img className='size-6 object-contain' src={linkedin} alt="locworld_shareation" />
                  <span>لینکدین</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <span className='text-white leading-10 md:text-[16px] text-sm' dir='rtl'>بیانیه خط­ مشی : صرف مشارکت و ارائه ایده‌­ها و پیشنهادات از سوی ذینفعان و سایر مشارکت­‌کنندگان موجب حق برای ایشان و مسئولیت برای شرکت کارگزاری بانک آینده نخواهد بود.</span>
        <span className='text-white md:text-[16px] text-sm' dir='rtl'>کلیه حقوق برای شرکت کارگزاری بانک آینده محفوظ است.</span>
        <span className='text-white md:text-[16px] text-sm' dir='rtl'>1404</span>

      </div>
    </footer>
  )
}

export default Footer