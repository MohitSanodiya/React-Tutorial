import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Pastes">Pastes</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
