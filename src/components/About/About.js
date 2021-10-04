import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import aboutimg from '../../../src/images/banner.png';
import { Button } from 'react-bootstrap';

const About = () => {
    const readIcon = <FontAwesomeIcon icon={faBookOpen} />
    return (
        <div>
            <section className="header-section">
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
        </div>
    );
};

export default About;