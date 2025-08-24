import React from 'react';
import useIsMobile from '../../Hooks/useIsMobile';
import manage_points_title from '../../assets/images/manage-points-title.png'

function Rewards() {

  const isIPad = useIsMobile(767)

  return (
    <div className="rewards w-full h-full flex flex-col py-4 space-y-4 px-2" dir='rtl'>
      {/* 1: مدیریت امتیاز */}
      {!isIPad ?

        <div className="manage-points w-full h-[110px] flex flex-row justify-between items-center bg-white Quantum_Card p-4 px-6">
          <div className='manage-points-title space-y-2 flex flex-col'>
            <span className='text-lg'>مدیریت امتیاز</span>
            <div className='flex flex-row space-x-2'>
              <img src={manage_points_title} className='size-8' alt="manage_points_title" />
              <span className='text-lg text-neutral-500 font-light'>
                ســطح : <p className='m-0 p-0 inline text-secondary-9'>طــلایی</p>
              </span>
            </div>
          </div>

          <div className='manage-point bg-secondary-10 px-6 py-3 rounded-lg text-secondary-3'>
            ۱.۰۰۰.۰۰۰.۰۰۰ امتیاز
          </div>
        </div>

        : null}

      {/* 2: جوایز و هدایا */}
      <div className="rewards-gifts">
      </div>

      {/* 3: قرعه‌کشی‌ها */}
      <div className="lotteries">
      </div>

      {/* 4: اعتبار */}
      <div className="credit">
      </div>

      {/* 5: دوره‌های آموزشی */}
      <div className="courses">
      </div>

      {/* 6: خیریه */}
      <div className="charity">
      </div>
    </div>
  );
}

export default Rewards;
