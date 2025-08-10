import React from 'react'

function Quantum_Card({title , src , alt = ''}) {
  return (
    <>
      <div className='Quantum_Card max-w-[232px] min-h-[264px] h-auto mx-auto px-4 text-center flex flex-col gap-y-3'>
        <img src={src} alt={alt} className='w-3/4 mx-auto' />
        <span className='text-secondary-3 text-xl'>{title}</span>
      </div>
    </>
  )
}

export default Quantum_Card