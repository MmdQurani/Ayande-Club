import React from 'react'

function Logo({src , alt}) {
  return (
    <>
    <img className='w-full h-full object-contain' src={src} alt={alt} />
    </>
  )
}

export default Logo