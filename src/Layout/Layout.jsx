import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function Layout({ children }) {
  return (
    <>
      <Header />

      <main className=''>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout