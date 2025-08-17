import React from 'react'

function MainLayout({ children }) {
  return (
    <>
      <span>header</span>
      {children}
      <span>footer</span>
    </>
  )
}

export default MainLayout