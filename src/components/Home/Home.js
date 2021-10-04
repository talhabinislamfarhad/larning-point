import React from 'react';
// CSS
import './Home.css';
// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faBookReader, faUser } from '@fortawesome/free-solid-svg-icons';
// All Components
import Service from '../Service/Service';
// Image
import banner from '../../../src/images/banner-1.jpg';
import { Button, Row } from 'react-bootstrap';

const Home = (props) => {
    const { services } = props;
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const bookIcon = <FontAwesomeIcon icon={faBook} />
    const bookOpen = <FontAwesomeIcon icon={faBookOpen} />
    const bookReader = <FontAwesomeIcon icon={faBookReader} />
    return (
        // 
        <section className="home-section">
            {/* Banner Section */}
            <div className="container mt-5 home">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="header-details mt-5">
                            <h6>Are you ready to Learn?</h6>
                            <h1>Welcome to LearningPoint: Where IT Leaders are Created </h1>
                            <p>LearningPoint, one of the leading IT training institutes in Bangladesh offers the best training opportunities. It has been playing a vital role to eradicate the unemployment problem since 2010.</p>
                            <Button variant="success" className="get-btn">{userIcon}  Admission Going On</Button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col mt-2 w-50 ms-auto">
                        <div className="header-banner">
                            <img src={banner} className="img-fluid" alt="{banner}" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Services section */}
            <div className="container-fluid">
                <h1 className="mt-3 mb-5 p-1">Our Services</h1>
                <Row xs={1} md={2} lg={4} className="g-1">
                    {
                        services.slice(0, 4).map(service => <Service key={service.id} service={service}>
                        </Service>)
                    }
                </Row>
            </div>
            {/* card section */}
            <div className="cards-section mt-5 mb-5 pt-5 pb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner ">
                                <span className="fs-1">{bookIcon}</span>
                                <h5>1500+ Topic</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{bookOpen}</span>
                                <h5>1200+ Lessons</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{bookReader}</span>
                                <h5>9K+ Test Token</h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-sm-6">
                            <div className="cards-inner">
                                <span className="fs-1">{userIcon}</span>
                                <h5>2000+ Student</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Home;