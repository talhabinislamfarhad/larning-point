import React from 'react';
import { Container } from 'react-bootstrap';
// Image
import notFound from '../../../src/images/404-not-found.jpg';
// CSS
import './NotFound.css';

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
            </Container>
        </div>
    );
};

export default NotFound;