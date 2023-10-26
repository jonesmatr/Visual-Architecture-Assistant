import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const Navigation = () => {
  return (

    <Nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/searchimages">Search Images</NavLink>
        <NavLink to="/savedimages">My Images</NavLink>
    </Nav>    

   );     
}

export default Navigation;