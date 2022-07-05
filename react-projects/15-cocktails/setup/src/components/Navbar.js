import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='nav-center'>
          <img src={logo} alt='logo' className='logo' />
          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  )
}

export default Navbar
