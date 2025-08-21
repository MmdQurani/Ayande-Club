import React from 'react'
import { useRoutes } from 'react-router-dom'
import Routes, { LoginRoutes } from './Routes/Routes'
import Layout from './Layout/AuthLayout'
import './App.css'
import MainLayout from './Layout/MainLayout'

function App() {

  const getLoginRoutes = useRoutes(LoginRoutes)
  const getRoutes = useRoutes(Routes)

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