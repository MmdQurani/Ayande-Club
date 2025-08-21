import React, { useState } from 'react'
import MainHeader from '../Components/MainHeader/MainHeader'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'

import logo from '../assets/images/logo/logo.png'

function MainLayout({ children }) {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className='MainLayout w-full h-max min-h-screen bg-gray-100/60 flex lg:flex-row flex-col justify-center relative' dir='rtl'>

      <div className="lg:hidden w-full main_header_mobile bg-white rounded-b-xl shadow-md flex flex-row justify-between p-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="px-4 py-2 stroke-neutral-800 cursor-pointer rounded-md hover:shadow-md transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <img className='h-8 w-auto object-contain' src={logo} alt="logo" />

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="px-4 py-2 stroke-neutral-800 cursor-pointer rounded-md hover:shadow-md transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>

      </div>

      <div className='lg:container w-full px-2 sm:px-12 lg:px-2 flex flex-row justify-center my-0 lg:mt-10 space-x-4'>

        {/* سایدبار */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 m-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          />
        )}

        <main className='main flex-1 min-w-0 relative z-0 overflow-hidden'>
          <MainHeader />
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
