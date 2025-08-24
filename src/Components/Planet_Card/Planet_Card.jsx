import React from 'react'
import useIsMobile from '../../Hooks/useIsMobile'

function Planet_Card({ src, alt = '', level, title, firstNum, lastNum, color }) {

  const isIPad = useIsMobile(825)

  return (
    <>
      {!isIPad ?
        <div className={`relative Planet_Card flex justify-center items-center w-[365px] h-full p-6 rounded-xl`} style={{ backgroundColor: color }}>
          <img className='Planet_Card_img absolute w-auto h-auto max-w-[210px] max-h-[185px] object-contain right-auto top-4' src={src} alt={alt} />
          <div className=' w-[267px] h-[313px] flex flex-col justify-center items-center bg-white rounded-2xl p-4'>
            <div className={`Quantum_Levels_Card_img w-[225px] max-w-[225px] h-[200px] max-h-[200px] flex justify-center items-center rounded-xl`} style={{ backgroundColor: color }}>
              {/* <img className='w-2/5 2xl:w-2/5' src={src} alt={alt} /> */}
            </div>
            <div className='Quantum_Levels_Card_Content w-full h-4/12 flex flex-col justify-center items-end px-4 mt-2 gap-y-4'>
              <div className='w-full flex flex-row justify-between items-center text-lg'>
                <span>{level}</span>
                <span>{title}</span>
              </div>
              <span className='text-neutral-400'>
                {firstNum} تا {lastNum}
              </span>
            </div>
          </div>
        </div>
        :
        <div className={`Planet_Card w-[250px] h-[290px] flex flex-col justify-center items-center p-6 rounded-xl m-auto`} style={{ backgroundColor: color }}>
          <img className='Planet_Card_img absolute w-[180px] h-[180px] object-contain right-auto top-6' src={src} alt={''} />
          <div className=' w-[186px] h-[240px] flex flex-col justify-center items-center bg-white rounded-2xl p-4'>
            <div className={`Quantum_Levels_Card_img w-[150px] h-[150px] flex justify-center items-center rounded-xl`} style={{ backgroundColor: color }}>

            </div>
            <div className='Quantum_Levels_Card_Content w-full h-4/12 flex flex-col justify-center items-end mt-2 gap-y-4'>
              <div className='w-full flex flex-row justify-between items-center text-lg'>
                <span className='text-md'>{level}</span>
                <span className='text-md'>{title}</span>
              </div>
              <span className='text-neutral-400 text-sm'>
                {firstNum} تا {lastNum}
              </span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Planet_Card