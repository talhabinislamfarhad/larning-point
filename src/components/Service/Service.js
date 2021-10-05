import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
// CSS
import './Service.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClock, faDollarSign, faGraduationCap, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Service = (props) => {
    const clockIcon = <FontAwesomeIcon icon={faClock} />
    const briefcaseIcon = <FontAwesomeIcon icon={faBriefcase} />
    const certificationIcon = <FontAwesomeIcon icon={faGraduationCap} />
    const enrollIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const priceIcon = <FontAwesomeIcon icon={faDollarSign} />

    const { name, duration, certification, img, TotalClass, price } = props.service;
    return (
        <div>
            <Container>
                <Card className="shadow mb-3">
                    <Card.Img variant="top" /> <img className="p-3 course-img" src={img} alt={name} />
                    <Card.Header id="card-header">{name}</Card.Header>
                    <Card.Body>
                        <Card.Text>{clockIcon} Duration: {duration}</Card.Text>
                        <Card.Text>{briefcaseIcon} Total Class: {TotalClass}</Card.Text>
                        <Card.Text>{certificationIcon} Certification: {certification}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex flex-column flex-md-row justify-content-between card-footer-area mx-3 my-3" id="card-footer">
                            <h5> Price: {price}{priceIcon}</h5>
                            <Button variant="outline-success">{enrollIcon} Enroll Now</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </div >
    );
};

export default Service;