import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import banner from '../../../src/images/banner-1.jpg';
import { Button } from 'react-bootstrap';

const Home = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <section className="header-section">
            <div className="container mt-5 home">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="header-details mt-5">
                            <h6>Are you ready to Learn?</h6>
                            <h1>The World's Leading Distance-Learning Provider </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nobis sequi aliquam consectetur officia iusto vitae nesciunt quaerat pariatur consequatur.</p>
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
            <div className="container">


            </div>
        </section>

    );
};

export default Home;