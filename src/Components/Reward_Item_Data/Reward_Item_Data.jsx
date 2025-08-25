import React from 'react'
import Snapp_logo from '../../assets/images/reward/Snapp_logo.png'

function Reward_Item_Data() {
  return (
    <div className="reward_item_data w-full h-full flex flex-col justify-start items-center space-y-8 mt-2">

      <div className='reward_item_data_header w-full md:h-[64px] h-max flex flex-col md:flex-row space-y-4 md:space-y-0'>
        <div className='reward_item_data_header_title flex-1 min-w-0 flex flex-row md:justify-start justify-between items-center space-x-4 px-2'>
          <div className='reward_item_data_img w-[145px] md:w-[170px] h-full rounded-lg flex justify-center items-center border-1 border-gray-100'>
            <img src={Snapp_logo} className='object-contain' alt="" />
          </div>
          <div className='reward_item_data_title flex flex-col space-y-2'>
            <span className='text-sm text-neutral-800'>هندزفری بیسیم تورو</span>
            <span className='text-xs md:text-[16px] text-neutral-500'>مدل T20 App Edition</span>
          </div>
        </div>

        <div className='reward_item_data_header_points w-full md:w-[165px] h-[36px] md:h-full flex flex-row md:flex-col justify-between md:items-end items-center gap-y-2 gap-x-4'>
          <span className="text-gray-500 w-max">
            <p className="inline p-0 m-0 ml-2 text-white bg-badge-1 px-2 py-0.5 rounded-full text-xs decoration-none">
              50%
            </p>
            <span className="line-through">500.000.000</span>
          </span>

          <button className='text-sm cursor-pointer border-1 border-secondary-2 text-secondary-2  w-[153px] md:w-full h-[32px] px-1 rounded-lg'>
            250.000.000 امتیاز
          </button>

        </div>
      </div>

      <div className="reward_item_data_body w-full h-full max-h-full overflow-y-auto scrollbar-custom px-2">

        <div className='description_reward_item border-b-1 border-neutral-300 pb-6'>
          <span className='text-sm flex flex-row items-center text-neutral-800 '>
            هندزفری بلوتوثی وان پلاس
            <p className='text-xs mr-2 text-neutral-400'> (مدل T20 App Edition) </p>
          </span>
          <p className='text-sm mt-2.5 text-neutral-500 leading-8'>
            جدیدترین هندزفری 2024 وان پلاس با ویژگی های جذاب عرضه شد. با استفاده از ووفر 10.4 میلیمتری و بهبود BassWave™، صدایی فراگیر و قوی خواهید داشت. طراحی ووفر و توییتر در کنار یکدیگر، فضای بیشتری فراهم می‌کند تا صدای باس عمیق و لرزان به خوبی ارائه شود.همچنین توییتر 6 میلیمتری تعبیه شده می توتند یک دامنه گسترده از نت‌های بلند و وکال را پخش ‌کند. این هندزفری صدایی با کیفیت بالا یا های رزولوشن صوتی را ایجاد می کند و از یک کدک محصوص با نام “LHDC 5.0” بهره می‌برد که نسخه 5.0 از این کدک ..
          </p>
        </div>

        <div className='help_reward_item mt-8 h-max py-4'>
          <span className='text-sm text-neutral-900 mb-2 block'>نحوه استفاده از جایزه :</span>
          <p className='text-sm text-neutral-500 leading-8 mb-12'>درصورت تمایل به استفاده از کد تخفیف اسنپ، باید بعد از انتخاب مبدا و مقصد، کد تخفیف خود را در بخش مربوطه که در تصویر زیر نیز نمایش داده شده است، وارد کنید.</p>
          <span className='text-sm text-neutral-900 mb-2 block'>قوانین استفاده:</span>
          <p className='text-sm text-neutral-500 leading-8'>برای  کامل از سرویس‌های گپ فیلم به حساب کاربری در گپ فیلم نیاز دارید. برای حفاظت از حساب کاربری خود در گپ فیلم، رمزتان را فاش نکنید.
            شما مسئول اتفاقاتی هستید که در حساب کاربری شما درگپ فیلم یا از طریق آن رخ می دهد (مثلاً خریدهایی که انجام می شود).
            سعی کنید از رمز حساب کاربری گپ فیلم خود در برنامه های دیگر استفاده مجدد نکنید.</p>
        </div>
      </div>

      <div className='w-full h-[46px] flex flex-row justify-between items-center gap-x-8'>
        <button className='w-1/2 sm:w-[125px] text-[16px] h-full border-1 border-secondary-2 text-secondary-2 rounded-md cursor-pointer'>انصراف</button>
        <button className='w-1/2 sm:w-[250px] text-[16px] h-full btn_gradient rounded-md text-white cursor-pointer'>دریافت هدیه</button>
      </div>

    </div>
  )
}

export default Reward_Item_Data