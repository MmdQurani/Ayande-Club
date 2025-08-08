import React from 'react'
import Landing_title from '../../Components/Landing_title/Landing_title'

function LandingPage() {
  return (
    <div className='LandingPage px-4 flex flex-col justify-start items-center bg-gradient-to-b from-secondary-1/40 to-transparent' dir='rtl'>
      <div className='container'>

        <Landing_title />

      </div>
    </div>
  )
}

export default LandingPage