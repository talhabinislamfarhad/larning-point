import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
// CSS
import './About.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
// Image
import aboutimg from '../../../src/images/banner.png';


const About = () => {
    const readIcon = <FontAwesomeIcon icon={faBookOpen} />
    return (
        <div>
            {/* About Details */}
            <section className="About-section">
                <div className="container mt-5 home">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 col mt-2 w-50 ms-auto">
                            <div className="header-banner">
                                <img
                                    src={aboutimg}
                                    width="100%"
                                    className="d-inline-block align-top"
                                    alt="learn-point-logo"
                                />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="header-details text-start">
                                <h1>About Us </h1>
                                <p>LearningPoint is an institution where empowering the community for an excellent standard of learning is what we desire. We endeavor for the continuous improvement of our leaders who will work for constructing a better future. The institute is dedicated to serving the quality training programs under ISO 9001: 2015 certification which remarks us in the IT world. We will continue to share our knowledge for contributing to the success of individuals and to serve society with the best interest.</p>
                                <Button variant="success" className="get-btn">{readIcon}  Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Exparts Trainer */}
            <section>
                <div className="container">
                    <div className="about">
                        <h2 className="mt-5 mb-5 text-center">Exparts Trainer</h2>
                    </div>
                </div>
                <div className="container mb-5 mt-5">
                    <Row xs={1} md={3} lg={4} className="gx-4 gy-5">
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="img-fluid p-1" src="https://github.com/talhabinislamfarhad/imgs/blob/main/img-1.jpg?raw=true" />
                                <Card.Body className="text-center">
                                    <Card.Title>Belinda</Card.Title>
                                    <Card.Title>JS DEVELOPER</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="img-fluid p-1" src="https://github.com/talhabinislamfarhad/imgs/blob/main/img-2.jpg?raw=true" />
                                <Card.Body className="text-center">
                                    <Card.Title>Christian</Card.Title>
                                    <Card.Title>React Developer</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="img-fluid p-1" src="https://github.com/talhabinislamfarhad/imgs/blob/main/img-3.jpg?raw=true" />
                                <Card.Body className="text-center">
                                    <Card.Title>Robert</Card.Title>
                                    <Card.Title>Node Js Developer</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" className="img-fluid p-1" src="https://github.com/talhabinislamfarhad/imgs/blob/main/img-4.jpg?raw=true" />
                                <Card.Body className="text-center">
                                    <Card.Title>Jane Nguyen</Card.Title>
                                    <Card.Title>Laravel Developer</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default About;