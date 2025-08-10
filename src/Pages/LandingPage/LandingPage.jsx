import React from 'react'
import Landing_title from '../../Components/Landing_title/Landing_title'
import Customer_Club_Introduction from '../../Components/Customer_Club_Introduction/Customer_Club_Introduction'

import Quantum_Card_Box from '../../Components/Quantum_Card_Box/Quantum_Card_Box'
import Route_Guide_Quantum from '../../Components/Route_Guide_Quantum/Route_Guide_Quantum'



function LandingPage() {

  return (
    <div className='LandingPage px-4 flex flex-col justify-start items-center' dir='rtl'>
      <div className='w-full h-auto'>

        <Landing_title />

        <Customer_Club_Introduction />

        <Quantum_Card_Box />

        <Route_Guide_Quantum />

      </div>
    </div>
  )
}

export default LandingPage