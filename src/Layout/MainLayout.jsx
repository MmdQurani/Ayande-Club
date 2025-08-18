import React from 'react'
import MainHeader from '../Components/MainHeader/MainHeader'

function MainLayout({ children }) {
  return (
    <>
      <div className='w-full h-full flex justify-center' dir='rtl'>

        <div className=' container bg-blue-400 flex flex-row justify-center my-10'>
          <div className='sidebar sticky top-0 h-[90vh] w-[267px] bg-amber-400'>sidebar</div>

          <main className='main flex-1'>
            <MainHeader />
            
            {children}
          </main>
        </div>

      </div>
    </>
  )
}

export default MainLayout