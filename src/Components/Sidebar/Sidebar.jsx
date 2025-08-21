import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem'

import callCalling from '../../assets/icons/call_calling_sidebar.png'

import { main_menu } from '../../config/menuConfig/menuConfig'
import { media } from '../../config/mediaConfig/mediaConfig'

function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="sidebar sticky top-10 h-[90vh] min-h-0 min-w-[267px] hidden lg:flex flex-col bg-white rounded-lg border border-neutral-200 p-4">

      <div className="sidebar_logo mb-6">
        <img
          onClick={() => navigate('/dashboard')}
          className="h-8 w-auto object-contain cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="sidebar_menu flex flex-col justify-between flex-1 min-h-0">

        <ul className="overflow-y-auto flex-1 min-h-0 mb-24 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none] space-y-2">
          {main_menu.map(item => (
            <li key={item.title}>
              <SidebarMenuItem href={item.href} title={item.title}>
                {item.svg}
              </SidebarMenuItem>
            </li>
          ))}
        </ul>

        <div className="sidebar_footer">

          <div className="mobile_contact0 py-6 border-t border-neutral-200 flex justify-between text-xs">
            <div className="flex items-center space-x-1.5">
              <img className="size-5 object-contain" src={callCalling} alt="تماس" />
              <span>تماس با ما</span>
            </div>
            <span>۰۲۱-۳۶۲۱۲۵۵۴۳</span>
          </div>

          <div className="media_contact py-6 border-t border-neutral-200 flex justify-between text-xs">
            {media.map(link => (
              <Link key={link.label} to={link.to} className="flex flex-col items-center space-y-2">
                <img className="size-6 object-contain" src={link.icon} alt={link.label} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
