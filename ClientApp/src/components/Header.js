import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">Dashboard</NavLink>
  </header>
);

export default Header;
