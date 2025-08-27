import React from 'react';
import GrowthTabs from '../../Components/GrowthTabs/GrowthTabs';

import Quantum_Level_1 from '../../assets/images/Quantum_Levels/Quantum_Level_1.png'
import Quantum_Level_2 from '../../assets/images/Quantum_Levels/Quantum_Level_2.png'
import Quantum_Level_3 from '../../assets/images/Quantum_Levels/Quantum_Level_3.png'
import Quantum_Level_4 from '../../assets/images/Quantum_Levels/Quantum_Level_4.png'
import Quantum_Level_5 from '../../assets/images/Quantum_Levels/Quantum_Level_5.png'
import Quantum_Level_6 from '../../assets/images/Quantum_Levels/Quantum_Level_6.png'
import Planet_Card from '../../Components/Planet_Card/Planet_Card';

function PointsGuide() {

  const Planet_Card_Value = [
    { id: 1, color: '#313131', src: Quantum_Level_1, title: 'ماه', level: 'اول', firstNum: 0, lastNum: 5000 },
    { id: 2, color: '#95C5C5', src: Quantum_Level_2, title: 'اورانوس', level: 'دوم', firstNum: 5000, lastNum: 15000 },
    { id: 3, color: '#B7AA87', src: Quantum_Level_3, title: 'زحل', level: 'سوم', firstNum: 15000, lastNum: 50000 },
    { id: 4, color: '#9B4A1B', src: Quantum_Level_4, title: 'مریخ', level: 'چهارم', firstNum: 50000, lastNum: 125000 },
    { id: 5, color: '#B5843F', src: Quantum_Level_5, title: 'عطارد', level: 'پنجم', firstNum: 125000, lastNum: 250000 },
    { id: 6, color: '#F2BE4F', src: Quantum_Level_6, title: 'خورشید', level: 'ششم', firstNum: 250000, lastNum: 'بی نهایت' }
  ]

  return (
    <GrowthTabs>
      <div className='w-full h-full flex flex-col justify-start items-center mt-10 space-y-8'>
        <span className='text-lg text-secondary-2'>سطح بندی کاربری باشگاه کوانتوم</span>

        <div className='Quantum_Levels mx-auto'>
          <div className='Quantum_Levels_Card mx-auto h-auto mt-8'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 h-auto'>

              {Planet_Card_Value.map(item =>
                <div key={item.id} className='w-full h-max flex flex-col justify-start items-center space-y-4'>
                  <div className={`relative Planet_Card flex justify-center items-center w-[164px] h-[176px] p-6 rounded-xl`} style={{ backgroundColor: item.color }}>
                    <img className='Planet_Card_img absolute h-auto w-[124px] object-contain right-auto top-1.5' src={item.src} />
                    <div className=' w-[120px] h-[142px] flex flex-col justify-start items-center bg-white rounded-2xl p-1.5'>
                      <div className={`Quantum_Levels_Card_img w-[98px] max-w-[225px] min-h-[87px] flex justify-center items-center rounded-xl`} style={{ backgroundColor: item.color }}>
                        {/* <img className='w-2/5 2xl:w-2/5' src={src} alt={alt} /> */}
                      </div>

                      <span className='mt-4 text-sm'>سیاره ماه</span>

                    </div>
                  </div>
                  <span className='text-neutral-500 text-[16px]'> سطح {item.level}</span>
                  <span className='bg-secondary-6 w-full text-center text-secondary-2 py-1 rounded-md'>
                    {item.firstNum} تا {item.lastNum}
                  </span>
                </div>
              )}

            </div>


          </div>

        </div>
      </div>
    </GrowthTabs>
  );
}

export default PointsGuide;
