import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#signup">Signup</Nav.Link>
                </Nav>
            </Navbar>

            {/* Page Content */}
            {children}

            {/* Footer (for later) */}
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
