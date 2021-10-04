import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// CSS
import './Contact.css';


const Contact = () => {
    return (
        <div>
            <div className="container text-start mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="text-center mb-4">
                            <h1>Contact Us</h1>
                            <p className="text-muted">Always Stay With Us!</p>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <Button onClick={(event) => {
                                event.preventDefault();
                            }} variant="success" type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
