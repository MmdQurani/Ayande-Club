import React from 'react'
import { useLocation } from 'react-router-dom'
import { main_menu } from '../../config/menuConfig/menuConfig'
import { useUser } from '../../Contexts/UserContext'
import Today from '../Today/Today'

function MainHeader() {

  const { user, isInBrokerage, loading } = useUser();
  const { pathname } = useLocation()

  const current = main_menu.find(item => item.href === pathname || item.children?.some(child => child.href === pathname))

  const title = current?.title || 'عنوان نامشخص'
  const Icon = current?.svg || (<span>آیکون</span>)

  const handleLogOutAccount = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <header className="w-full h-[44px] hidden lg:flex mb-4">
      <div className="content_header w-full h-full grid grid-cols-12 space-x-4">

        <div className="col-span-3">
          <div className="w-full h-full flex items-center bg-white border border-neutral-200 rounded-md space-x-2 px-2 text-sm text-neutral-600 stroke-neutral-600">
            {Icon}
            <span>{title}</span>
          </div>
        </div>

        <div className="col-span-4">
          <div className="w-full h-full flex items-center bg-white border border-neutral-200 rounded-md space-x-2 px-2 text-sm text-neutral-600 stroke-neutral-600">

            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            {loading ? <span>در حال بارگذاری...</span> : <span>{user.data.firstName} {user.data.lastName}</span>}
          </div>
        </div>

        <div className="col-span-5 flex flex-row space-x-2">

          <div className='date_day flex justify-between items-center bg-white border border-neutral-200 rounded-md space-x-2 px-2 text-sm text-neutral-600 stroke-neutral-600 flex-1'>
            <div className='flex flex-row space-x-2 text-neutral-600 stroke-neutral-600 fill-neutral-600'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke-width="1.5" />
                <path d="M7 4V2.5" stroke-width="1.5" stroke-linecap="round" />
                <path d="M17 4V2.5" stroke-width="1.5" stroke-linecap="round" />
                <path d="M2.5 9H21.5" stroke-width="1.5" stroke-linecap="round" />
                <path d="M18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17Z" />
                <path d="M18 13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13C16 12.4477 16.4477 12 17 12C17.5523 12 18 12.4477 18 13Z" />
                <path d="M13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" />
                <path d="M13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13Z" />
                <path d="M8 17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16C7.55228 16 8 16.4477 8 17Z" />
                <path d="M8 13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13C6 12.4477 6.44772 12 7 12C7.55228 12 8 12.4477 8 13Z" />
              </svg>
              <span>تاریخ روز:</span>
            </div>
            <span className='bg-secondary-10 py-1 px-2 text-neutral-800 rounded-sm'>
              <Today />
            </span>
          </div>

          <div className='notification_btns flex flex-row'>
            <button className='h-full w-max flex justify-center items-center bg-white border border-neutral-200 rounded-md space-x-2 px-2 text-sm text-neutral-600 stroke-neutral-600 cursor-pointer'>

              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">

                <title />

                <g id="Complete">

                  <g id="bell">

                    <g>

                      <path d="M18.9,11.2s0-8.7-6.9-8.7-6.9,8.7-6.9,8.7v3.9L2.5,17.5h19l-2.6-2.4Z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                      <path d="M14.5,20.5s-.5,1-2.5,1-2.5-1-2.5-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                    </g>

                  </g>

                </g>

              </svg>

            </button>
            <button onClick={handleLogOutAccount} className='h-full w-9 flex justify-center items-center bg-white border border-neutral-200 rounded-md space-x-2 px-2 text-sm text-neutral-600 stroke-neutral-600 cursor-pointer'>

              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32" id="Outlined">

                <title />

                <g id="Fill">

                  <path d="M25,2H16V4h9a1,1,0,0,1,1,1V27a1,1,0,0,1-1,1H16v2h9a3,3,0,0,0,3-3V5A3,3,0,0,0,25,2Z" />

                  <path d="M21.58,17V15H7l4-4L9.58,9.55l-5,5a2,2,0,0,0,0,2.83l5,5L11,21,7,17Z" />

                </g>

              </svg>

            </button>
          </div>

        </div>

      </div>
    </header>
  )
}

export default MainHeader
