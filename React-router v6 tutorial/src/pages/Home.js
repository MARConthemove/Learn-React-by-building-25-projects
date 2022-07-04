// Link React Router
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className='section'>
        <Outlet />
      </section>

      <Footer />
    </React.Fragment>
  )
}
export default Home
