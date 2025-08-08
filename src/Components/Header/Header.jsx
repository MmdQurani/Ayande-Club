import React from 'react'
import Logo from '../Logo/Logo'
import imageLogo from '../../assets/images/logo/logo.png'
import LoginBtn from '../LoginBtn/LoginBtn'

function Header() {
  return (
    <header className="sticky top-0 w-full h-16 bg-white shadow-md shadow-gray-200 z-[100] flex justify-center items-center">
      <div className="container h-full w-full flex flex-row items-center justify-between px-2">

        <LoginBtn />

        <div className='Logo h-9'>
          <Logo src={imageLogo} alt='لوگو' />
        </div>

      </div>
    </header>

  )
}

export default Header