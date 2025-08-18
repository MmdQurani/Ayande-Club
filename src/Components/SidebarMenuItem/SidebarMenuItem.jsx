import React from 'react'
import { Link } from 'react-router-dom'

function SidebarMenuItem({ href, title }) {
  return (
    <>
      <Link to={href} className=' block px-2 py-4 my-1 text-sm text-neutral-500 border-t-1 border-neutral-200'>
        <span>{title}</span>
      </Link>
    </>
  )
}

export default SidebarMenuItem