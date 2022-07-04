// Link React Router
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import StyledNavbar from '../components/StyledNavbar'

const Home = () => {
  return (
    <React.Fragment>
      <StyledNavbar />
      <Outlet />
    </React.Fragment>
  )
}
export default Home
