import React from 'react'

function Planet_Card({src , alt = '' , level , title , firstNum , lastNum , color}) {
  return (
    <>
      <div className={`Planet_Card w-full h-full bg-[${color}] p-6 rounded-xl`}>
        <div className='min-h-[350px] max-h-[350px] w-full h-full bg-white rounded-2xl p-4'>
          <div className={`Quantum_Levels_Card_img bg-[${color}] flex justify-center items-center h-8/12 rounded-xl`}>
            <img className='w-2/3' src={src} alt={alt} />
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
    </>
  )
}

export default Planet_Card