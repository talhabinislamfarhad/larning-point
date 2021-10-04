import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand>LarningPoint</Navbar.Brand>
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