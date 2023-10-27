import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Nav>
        <NavLink to="/" exact>About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
    </Nav>
  );
}

export default Navigation;
