import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div>
      <h2>navbar component</h2>
      <Outlet />
    </div>
  )
}

export default Navbar
