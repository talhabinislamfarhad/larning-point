import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setStudents] = useState([]);
    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);
    return (
        <div className="container-fluid mt-2 pt-5">
            <h1 className="mt-3 p-1">Our Services</h1>
            <p className="mb-5 text-muted">Explore the weapons of Latest Information Technology!</p>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;