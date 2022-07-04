import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        // optional inline styling:
        // style={({ isActive }) => {
        //   return { color: isActive ? 'red' : 'grey' }
        // }}
      >
        home
      </NavLink>

      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        about
      </NavLink>

      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        products
      </NavLink>

      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        login
      </NavLink>
    </nav>
  )
}

export default Navbar
