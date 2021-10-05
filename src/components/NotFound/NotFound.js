import React from 'react';
import { Container } from 'react-bootstrap';
// Image
import notFound from '../../../src/images/404.PNG';
// CSS
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Container>
                <img
                    src={notFound}
                    width="100%"
                    className="d-inline-block align-top"
                    alt="learn-point-logo"
                />
                <Link to="/">
                    <Button variant="success">BACK TO HOME</Button>
                </Link>
            </Container>
        </div>
    );
};

export default NotFound;