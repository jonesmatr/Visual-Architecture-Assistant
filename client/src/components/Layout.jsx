import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Auth from '../utils/auth';

const Layout = ({ children }) => {
    const isLoggedIn = Auth.loggedIn();

    const handleLogout = () => {
        Auth.logout();
        // If you're using react-router, you can redirect to home or login page
        // For now, I'll just force a page reload to ensure the navbar updates.
        window.location.assign('/');
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar bg="light" expand="lg" className="custom-navbar">
                {/* Logo */}
                <Navbar.Brand href="/">
                    <img
                        src="/logo.png"  // Path to your logo
                        width="130"   // Adjust width as needed
                        height="65"  // Adjust height as needed
                        className="d-inline-block align-top navbar-logo"
                        alt="Your Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav>
                    <Nav.Link href="homepage" className="custom-nav-link">Home</Nav.Link>
                    <Nav.Link href="innovation" className="custom-nav-link">Innovation</Nav.Link>
                    <Nav.Link href="portfolio" className="custom-nav-link">Portfolio</Nav.Link>
                    <Nav.Link href="pricing" className="custom-nav-link">Pricing</Nav.Link>
                    <Nav.Link href="about" className="custom-nav-link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="login-signup-nav">
                    {isLoggedIn ? (
                        <Nav.Link onClick={handleLogout} className="small-nav-link">Logout</Nav.Link>
                    ) : (
                        <>
                            <Nav.Link href="login" className="small-nav-link">Login</Nav.Link>
                            <Nav.Link href="signup" className="small-nav-link">Signup</Nav.Link>
                        </>
                    )}
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
