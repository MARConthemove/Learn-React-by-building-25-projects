import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../logo.svg'
import logo2 from '../Cocktail3.svg'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className='navbar'>
        <div className='nav-center'>
          <Link to='/'>
            <img src={logo2} alt='cocktail db logo' className='logo' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  )
}

export default Navbar
