import React from 'react'
import { useRoutes } from 'react-router-dom'
import Routes from './Routes/Routes'
import Layout from './Layout/Layout'

function App() {

  const getRoutes = useRoutes(Routes) // فراخوانی روت های پروژه

  return (
    <>
      <Layout>
        {getRoutes}
      </Layout>
    </>
  )
}

export default App