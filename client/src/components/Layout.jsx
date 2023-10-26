import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="light" expand="lg" className="custom-navbar">
                {/* Logo */}
                <Navbar.Brand href="/">
                    <img
                        src="/logo.png"  // Path to your logo
                        width="96"   // Adjust width as needed
                        height="55"  // Adjust height as needed
                        className="d-inline-block align-top navbar-logo"
                        alt="Your Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav>
                    <Nav.Link href="#about" className="custom-nav-link">About</Nav.Link>
                    <Nav.Link href="#portfolio" className="custom-nav-link">Portfolio</Nav.Link>
                    <Nav.Link href="#pricing" className="custom-nav-link">Pricing</Nav.Link>
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
