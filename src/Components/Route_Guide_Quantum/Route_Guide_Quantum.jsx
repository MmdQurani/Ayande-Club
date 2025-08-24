import React from 'react'
import Route_Guide_Quantum_Img from '../../assets/images/Quantum/quantomSteps-CnOKrCz-.svg'
import Route_Guide_Quantum_Img_sm from '../../assets/images/Quantum/quantumLanding-C4p4afdw.svg'

function Route_Guide_Quantum() {
  return (
    <>
      <div className='Route_Guide_Quantum container 2xl:w-2/3 max-w-[90%] mx-auto h-auto  mt-16'>

        <div className='Route_Guide_Quantum_Head flex lg:flex-row flex-col justify-between lg:items-center items-start gap-6'>

          <div className='Route_Guide_Quantum_Title w-2/3'>
            <span className='md:text-4xl text-2xl'>سفر فضایی‌ شما با کوآنتوم از اینجا آغاز می‌شود...</span>
            <p className='m-0 p-0 mt-3 md:text-[16px] leading-7 text-sm text-gray-500'>در راهنمای دریافت امتیاز به طور کامل توضیح داده شده است که به ازای هر فعالیت شما چند امتیاز دریافت میکنید...</p>
          </div>

          <div className='Route_Guide_Quantum_Btn'>
            <button className='bg-gradient-to-r md:text-xl text-[16px] cursor-pointer from-secondary-1/60 to-secondary-1 text-gray-800 py-2.5 px-6 rounded-lg'>ورود به دنیای کوانتوم</button>
          </div>

        </div>

        <div className='Route_Guide_Quantum_Image w-full h-auto flex justify-center items-center mt-16'>
          <img src={Route_Guide_Quantum_Img} className='object-contain md:flex hidden' alt="" />
          <img src={Route_Guide_Quantum_Img_sm} className='object-contain md:hidden flex' alt="" />
        </div>

      </div>
    </>
  )
}

export default Route_Guide_Quantum