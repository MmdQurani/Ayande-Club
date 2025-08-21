import React from 'react'
import MainHeader from '../Components/MainHeader/MainHeader'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Sidebar/Sidebar'

function MainLayout({ children }) {

  const navigate = useNavigate()

  return (
    <>
      <div className='MainLayout w-full min-h-screen bg-gray-100/60 flex justify-center' dir='rtl'>

        <div className='lg:container w-full px-2 flex flex-row justify-center my-10 space-x-4'>
          <Sidebar />

          <main className='main flex-1 min-w-0'>
            <MainHeader />

            {children}
          </main>
        </div>

      </div>
    </>
  )
}

export default MainLayout