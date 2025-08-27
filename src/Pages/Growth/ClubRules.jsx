import React from 'react'
import GrowthTabs from '../../Components/GrowthTabs/GrowthTabs'

function ClubRules() {
  return (
    <GrowthTabs>
      <div className=' ClubRules w-full h-full p-4'>
        <span className='text-sm md:text-lg text-secondary-2'>قوانین باشگاه مشتریان کوانتوم</span>

        <ul className='w-full h-full mt-8 flex flex-col justify-start items-start gap-y-8'>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>1</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>ورود کوانتوم فقط برای مشتریان حقیقی امکان پذیر می باشد.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>2</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>هر امتیاز معادل 1000 ریال است</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>3</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>امتیاز سطح مشتری در پایان سال صفر می‌شود.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>4</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>امتیاز نقد مشتری در پایان سال حفظ شده و به سال بعد منتقل می‌شود.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>5</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>شرط عضویت در کلاب، ورود به سامانه باشگاه و عضویت در آن می‌باشد.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>6</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>در خصوص امتیازاتی که اخذ آن نیازمند مشارکت مشتری است (نظیر شرکت دردوره‌ی آموزشی ) در صورتی که در زمان مقرر در دوره حضور نیابد ، امتیازات مربوط به پاداش را از دست خواهد داد و ازین بابت مسئولیتی متوجه باشگاه نیست.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>7</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>امتیازهای تعلق گرفته به هر مشتری صرفا در سامانه باشگاه مشتریان دارای اعتبار می‌باشد و خارج از آن فاقد اعتبار قانونی است.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>8</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>ضریب امتیازی که به مشتریان سهام کلاب اختصاص یافته، دائمی نبوده و ممکن است تغییر نماید.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>9</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>چنانچه مشتری مرتکب هر نوع سوء استفاده، هک یا بروز اختلال در عملکرد باشگاه مشتریان شود، علاوه بر قطع فوری دسترسی، موظف به جبران خسارت  خواهد بود و مسئولیت قانونی آن بر عهده وی می‌باشد.</p>
          </li>
          <li className='text-xs md:text-sm flex flex-row items-center justify-start gap-x-3'>
            <span className='px-3 py-0.5 rounded-lg bg-secondary-6 text-secondary-2'>10</span>
            <p className='inline text-neutral-600 leading-8 p-0 m-0'>حق اعمال تغییر در قوانین و مقررات باشگاه مشتریان برای کارگزاری بانک آینده محفوظ می‌باشد و در این صورت، تغییرات از طریق وب‌سایت باشگاه اطلاع‌رسانی خواهد شد.</p>
          </li>
        </ul>
      </div>
    </GrowthTabs>
  )
}

export default ClubRules