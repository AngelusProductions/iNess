import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>iNess</h1>
    <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
  </header>
);

export default Header;
