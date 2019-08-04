import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>iNess</h1>
    <NavLink to="/" exact>
      Dashboard
    </NavLink>
  </header>
)

export default Header
