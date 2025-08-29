import React from 'react'
import InfoCard from '../../Components/InfoCard/InfoCard'

function Info() {
  return (
    <div className='w-full flex flex-col sm:flex-row items-start gap-4'>

      <div className='right_items_info w-full sm:w-1/2 h-full flex flex-col gap-4'>
        <InfoCard
          title="اطلاعات هویتی"
          data={[
            { label: "نام", value: "محمد حسین" },
            { label: "نام خانوادگی", value: "میرابوالقاسمی" },
            { label: "کد ملی", value: "۰۰۶۴۳۲۴۲۸" },
            { label: "نام پدر", value: "میلاد" },
            { label: "شماره شناسنامه", value: "۰۰۲۵۶۷۲۸" },
            { label: "تاریخ تولد", value: "1373/11/28" },
            { label: "کد بورسی", value: "۲۵۴۱ م ج" },
          ]}
          style={'h-[385px]'}
        />

        <InfoCard
          title="اطلاعات تکمیلی"
          data={[
            { label: "وضعیت تاهل", value: "." },
            { label: "تاریخ تولد همسر", value: "." },
            { label: "تعداد فرزند", value: "." },
            { label: "تاریخ تولد فرزند", value: "." },
          ]}
          style={'h-[370px]'}
        >
          <button className='btn_gradient w-[195px] h-[36px] mx-auto cursor-pointer text-white rounded-lg'>تکمیل اطلاعات</button>
        </InfoCard>
      </div>

      <div className='left_items_info w-full sm:w-1/2 h-full flex flex-col gap-4'>
        <InfoCard
          title="اطلاعات تماس"
          data={[
            { label: "موبایل", value: "۰۹۱۲۳۴۵۶۷۸۹" },
            { label: "تلفن ثابت", value: "۰۲۱۷۷۹۸۵۴۴۴" },
            { label: "کد پستی", value: "۱۱۲۴۵۶۷۸۹۹۰" },
            { label: "آدرس", value: "تهران- منطقه ۱۲- خیابان بهارستان- کوچه..." },
          ]}
          style={'h-[255px]'}
        />

        <InfoCard
          title="اطلاعات بانکی"
          data={[
            { label: "نام بانک", value: "بانک سپه" },
            { label: "کد شعبه", value: "۱۸۱۰۲۵۶۳۲۴۱" },
            { label: "شماره حساب", value: "۲۱۵۳۶۲۵۱۴۷۸" },
            { label: "نام شبا", value: "IR-۳۲۶۵۵۸۵۰۰۰۰۰۰۰۳۲۳۲۴۵" },
          ]}
          style={'h-[500px]'}
        >
          <div className='w-full min-h-[190px] p-4 flex flex-col items-start justify-between gap-4 bg-secondary-15 rounded-lg text-xs'>
            <p className='text-neutral-800'>توجه داشته باشید!</p>
            <span>ویرایش اطلاعات تنها از طریق سایت سجام امکان پذیر است</span>
            <p className='leading-5'>لذا تنها درصورتـــی که اطلاعات خود را در سایت سجــام تغییر داده‌اید فرآیند بروزرسانی را انجام دهید. در غیر این صورت نیازی به بروزرسانی نیست.
            </p>
            
            <button className='btn_gradient text-sm w-[195px] h-[36px] mx-auto cursor-pointer text-white rounded-lg flex flex-row justify-center items-center gap-x-2'>

              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04392 3.79517C3.36913 3.79517 3.63276 4.0588 3.63276 4.38401V7.32822H6.57697C6.90218 7.32822 7.16581 7.59185 7.16581 7.91706C7.16581 8.24227 6.90218 8.5059 6.57697 8.5059H3.04392C2.71871 8.5059 2.45508 8.24227 2.45508 7.91706V4.38401C2.45508 4.0588 2.71871 3.79517 3.04392 3.79517Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.74783 3.07028C10.1187 2.79717 11.5397 2.93676 12.8312 3.47141C14.1227 4.00606 15.2266 4.91173 16.0033 6.07387C16.78 7.23601 17.1946 8.6024 17.1946 10.0002C17.1946 11.398 16.78 12.7644 16.0033 13.9265C15.2266 15.0886 14.1227 15.9943 12.8312 16.529C11.5397 17.0636 10.1187 17.2032 8.74783 16.9301C7.37698 16.657 6.11794 15.9834 5.12995 14.9946C4.90009 14.7646 4.90024 14.3917 5.13029 14.1619C5.36034 13.932 5.73318 13.9322 5.96304 14.1622C6.78636 14.9862 7.83557 15.5475 8.97794 15.7751C10.1203 16.0027 11.3045 15.8864 12.3808 15.4408C13.457 14.9953 14.3769 14.2406 15.0242 13.2721C15.6714 12.3037 16.0169 11.165 16.0169 10.0002C16.0169 8.83536 15.6714 7.69671 15.0242 6.72826C14.3769 5.75981 13.457 5.00508 12.3808 4.55954C11.3045 4.114 10.1203 3.99767 8.97794 4.22526C7.83557 4.45286 6.78636 5.01415 5.96304 5.83815L5.96226 5.83893L3.45968 8.33414C3.22938 8.56376 2.85655 8.56321 2.62693 8.33292C2.39732 8.10262 2.39786 7.72979 2.62816 7.50017L5.12995 5.00574C5.13009 5.0056 5.13022 5.00547 5.13035 5.00534C6.11827 4.01677 7.37717 3.34336 8.74783 3.07028Z" fill="white" />
              </svg>

              <span>بروزرسانی اطلاعات</span>
            </button>
          </div>
        </InfoCard>

      </div>

    </div>
  )
}

export default Info