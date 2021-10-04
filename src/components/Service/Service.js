import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, duration, certification, img, TotalClass, price } = props.service;
    return (
        <div>
            <Container>
                <Card className="shadow">
                    <Card.Img variant="top" /> <img className="p-3 course-img" src={img} alt={name} />
                    <Card.Header>{name}</Card.Header>
                    <Card.Body>
                        <Card.Text>Duration: {duration}</Card.Text>
                        <Card.Text>Total Class: {TotalClass}</Card.Text>
                        <Card.Text>Certification: {certification}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex flex-column flex-md-row justify-content-between card-footer-area mx-3 my-2">
                            <h5>Price: {price}</h5>
                            <Button variant="outline-success">Enroll Now</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </div >
    );
};

export default Service;