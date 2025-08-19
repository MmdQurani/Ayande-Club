import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarMenuItem({ href, title, children }) {
  return (
    <NavLink to={href} end className={({ isActive }) =>
      [
        'flex items-center space-x-1 px-2 py-4 my-1 text-sm border-t border-neutral-200',
        'outline-0',
        isActive
          ? 'text-secondary-2 stroke-secondary-2'   // active styles
          : 'text-neutral-600 stroke-neutral-600'         // default styles
      ].join(' ')
    }
    >
      {children}
      <span>{title}</span>
    </NavLink>
  )
}

export default SidebarMenuItem