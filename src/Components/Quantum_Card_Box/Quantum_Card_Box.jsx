import React from 'react'

import Quantum_1 from '../../assets/images/Quantum/Quantum-1.png'
import Quantum_2 from '../../assets/images/Quantum/Quantum-2.png'
import Quantum_3 from '../../assets/images/Quantum/Quantum-3.png'
import Quantum_4 from '../../assets/images/Quantum/Quantum-4.png'
import Quantum_5 from '../../assets/images/Quantum/Quantum-5.png'
import Quantum_6 from '../../assets/images/Quantum/Quantum-6.png'

import Quantum_Card from '../Quantum_Card/Quantum_Card'

function Quantum_Card_Box() {

  const Data_Quantum_Card = [
    { id: 1, title: 'کدهای تخفیـــــف ویــــــــــــــــژه', src: Quantum_1 },
    { id: 2, title: 'امـــــتیاز روزانـــه و وفـــــــاداری', src: Quantum_2 },
    { id: 3, title: 'گزارش‌های تحلیلی اختصــــــاصی', src: Quantum_3 },
    { id: 4, title: 'بازی‌ و سـرگرمی‌‌های جــــــذاب', src: Quantum_4 },
    { id: 5, title: 'مشــارکــت در فعالیت‌های خیـریه', src: Quantum_5 },
    { id: 6, title: 'دوره‌های آموزشی کاربــــــــردی', src: Quantum_6 },
  ]

  return (
    <>
      <div className='Quantum_Card_Box w-full max-h-[900px] h-auto py-12 mt-4 flex justify-center'>
        <div className='container flex flex-col justify-center items-center'>

          <div className='Quantum_Card_Box_Title max-w-[90%] flex flex-col justify-center items-center gap-y-8'>
            <span className='bg-gradient-to-r from-secondary-1/20 to-secondary-1/40 text-secondary-2 text-4xl px-6 py-2.5  rounded-lg'>چـــرا کــوآنتوم...؟</span>

            <p className='m-0 p-0 xl:w-3/4 md:w-2/3 w-full text-gray-700 text-center'>کوانتوم فقط یک باشگاه مشتریان نیست، بلکه یک مسیر صعــودی است در منظـومه‌ای از فرصـت‌ها و امتیــازها.</p>
          </div>

          <div className='Quantum_Cards 2xl:w-6/11 lg:w-2/3 w-auto mt-10 h-auto grid grid-cols-12 gap-8 '>
            {Data_Quantum_Card.map(item =>
              <div key={item.id} className='md:col-span-4 sm:col-span-6 col-span-12 lg:flex hidden'>
                <Quantum_Card {...item} />
              </div>
            )}

            <div className=' col-span-12 lg:hidden flex'>
              <Quantum_Card src={Quantum_1} title='کدهای تخفیـــــف ویــــــــــــــــژه' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Quantum_Card_Box