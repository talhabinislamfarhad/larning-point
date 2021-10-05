import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// CSS
import './Header.css';

const header = () => {
    return (
        <div>
            {/* Header Navbar */}
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand><NavLink className="nav-link text-white" to="/home">LarningPoint</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" activeKey="/home">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default header;