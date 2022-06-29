import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

// import context
import { AppContext, useGlobalContext } from './context'

const Home = () => {
  // useContext
  /* const data = useContext(AppContext) */

  const { openSidebar, openModal } = useGlobalContext()

  return (
    <>
      <main>
        <button className='sidebar-toggle' onClick={openSidebar}>
          <FaBars />
        </button>
        <button className='btn' onClick={openModal}>
          show modal
        </button>
      </main>
    </>
  )
}

export default Home
