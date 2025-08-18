import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem'

import instagram from '../../assets/icons/media_sidebar/brand-instagram.png'
import telegram from '../../assets/icons/media_sidebar/brand-telegram.png'
import site from '../../assets/icons/media_sidebar/site.png'
import call_calling from '../../assets/icons/call_calling_sidebar.png'

function Sidebar() {
  const navigate = useNavigate()

  return (
    <div className="sidebar sticky top-10  h-[90vh] min-h-0 w-[267px] flex flex-col  bg-white rounded-lg  border border-neutral-200 p-4">

      <div className="sidebar_logo mb-6">
        <img onClick={() => navigate('/dashboard')} className="h-8 w-auto object-contain cursor-pointer" src={logo} alt="Logo" />
      </div>

      <div className="sidebar_menu w-full flex flex-col justify-between flex-1 min-h-0 space-y-24">

        <ul className="overflow-y-auto flex-1 min-h-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]space-y-2">
          <li>
            <SidebarMenuItem href="/" title="داشبورد کوانتومی" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="گنجینه جوایز" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="خزانه امتیاز" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="نردبان رشد" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="دعوت و درآمد" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="مرکز راهنما" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="ارتباط با ما" />
          </li>
          <li>
            <SidebarMenuItem href="/" title="اطلاعات کاربری" />
          </li>
        </ul>

        <div className="sidebar_footer">
          <div className="mobile_contact0 py-6 border-t border-neutral-200 flex justify-between text-xs">
            <div className='flex flex-row items-center space-x-1'>
              <img className='size-6 object-contain' src={call_calling} alt="" />
              <span>تماس با ما</span>
            </div>
            <span>۰۲۱-۳۶۲۱۲۵۵۴۳</span>
          </div>

          <div className="media_contact py-6 border-t border-neutral-200 flex justify-between text-xs">
            <Link to="/" className="flex flex-col items-center space-y-2">
              <img className='size-6 object-contain' src={site} alt="" />
              <span>سایت</span>
            </Link>
            <Link to="/" className="flex flex-col items-center space-y-2">
              <img className='size-6 object-contain' src={instagram} alt="" />
              <span>اینستاگرام</span>
            </Link>
            <Link to="/" className="flex flex-col items-center space-y-2">
              <img className='size-6 object-contain' src={telegram} alt="" />
              <span>تلگرام</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
