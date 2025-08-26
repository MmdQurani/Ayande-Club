import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function SidebarMenuItem({ href, title, children, subItems }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (subItems && location.pathname.startsWith(href)) {
      setOpen(true)
    }else {
      setOpen(false)
    }
  }, [location.pathname, href, subItems])

  const toggleDropdown = () => setOpen(!open)
  const isParentActive = location.pathname.startsWith(href)

  return (
    <div>
      {subItems ? (
        <>
          <button
            onClick={toggleDropdown}
            className={`flex items-center justify-between w-full cursor-pointer px-2 py-4 text-sm border-t border-neutral-200 transition-colors
              ${isParentActive ? 'text-secondary-2 stroke-secondary-2 fill-secondary-2 font-bold' : 'text-neutral-600 hover:fill-secondary-2 hover:text-secondary-2'}`}
          >
            <div className="flex items-center space-x-1">
              {children}
              <span>{title}</span>
            </div>
            <span className="text-lg font-bold">
              {open ? '-' : '+'}
            </span>
          </button>

          <ul
            className={`mr-4 ml-6 space-y-1.5 overflow-hidden transition-all duration-300 ease-in-out
              ${open ? 'max-h-40 opacity-100 ' : 'max-h-0 opacity-0'}`}
          >
            {subItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      'block px-2 py-2 text-sm rounded transition',
                      isActive ? 'text-secondary-2 font-bold bg-secondary-12' : 'text-neutral-600 hover:bg-gray-100'
                    ].join(' ')
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <NavLink
          to={href}
          end
          className={({ isActive }) =>
            [
              'flex items-center space-x-1 px-2 py-4 my-1 text-sm border-t border-neutral-200',
              isActive
                ? 'text-secondary-2 stroke-secondary-2 font-bold'
                : 'text-neutral-600 stroke-neutral-600 hover:text-secondary-2'
            ].join(' ')
          }
        >
          {children}
          <span>{title}</span>
        </NavLink>
      )}
    </div>
  )
}

export default SidebarMenuItem
