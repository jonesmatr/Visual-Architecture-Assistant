import React from 'react'
import Navigation from './Navigation'
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

function Header() {
    return (
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }

export default Header;


