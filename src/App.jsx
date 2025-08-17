import React from 'react'
import { useRoutes } from 'react-router-dom'
import Routes, { LoginRoutes } from './Routes/Routes'
import Layout from './Layout/AuthLayout'
import './App.css'
import MainLayout from './Layout/MainLayout'

function App() {

  const getRoutes = useRoutes(Routes)
  const getLoginRoutes = useRoutes(LoginRoutes)

  return (
    <>
      {getLoginRoutes}
      <MainLayout>
        {getRoutes}
      </MainLayout>

    </>
  )
}

export default App