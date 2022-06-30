import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

// context import
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar } = useGlobalContext()

  return (
    <nav className='nav'>
      <div className='nav-center'>
        {/* NAVBAR */}
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        {/* NAVBAR items */}
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>projects</button>
          </li>
          <li>
            <button className='link-btn'>devolper journey</button>
          </li>
          <li>
            <button className='link-btn'>company</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
