// Link React Router
import React from 'react'

import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <h2>products</h2>
      <Outlet />
    </React.Fragment>
  )
}
export default Home
