import React from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div>
                <div className='text-center py-4 bg-link'>
                    <NavLink
                        className='fs-4 text-decoration-none'
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        <span>Home | </span>
                    </NavLink>
                    <NavLink
                        className='fs-4 text-decoration-none'
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        <span>About Us | </span>
                    </NavLink>
                    <NavLink
                        className='fs-4 text-decoration-none'
                        to="/contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        <span>contact</span>
                    </NavLink>
                </div>
                <div className='container my-4'>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className='shadow-lg'>
                                <Card.Img variant="top" className='img-fluid contact-img' src="https://i.pinimg.com/originals/1c/6c/0d/1c6c0d91fad08db3c80296f3f2efc884.jpg" />
                                <Card.Body>
                                    <Card.Title className='text-center'>Phone Numbers</Card.Title>
                                    <Card.Text className='text-center'>
                                        <a href="tel:+xxxxxx"> 01xxxxxxxxxx</a> <br />
                                        <a href="tel:+xxxxxx"> 01xxxxxxxxxx</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='shadow-lg'>
                                <Card.Img variant="top" className='img-fluid contact-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQd0OYQ15bZVB4Ha88E2VNDsBLfLS1tFO3SxpBNHDMe7k9u94VZk1rDzQQmxte5r2HrE4&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title className='text-center'>Email Address</Card.Title>
                                    <Card.Text className='text-center'>
                                        <a href="mailto:someone@example.com"> demo@demo.com</a> <br />
                                        <a href="mailto:someone@example.com"> demo@demo.com</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='shadow-lg'>
                                <Card.Img variant="top" className='img-fluid contact-img' src="https://cdn.dribbble.com/users/2543315/screenshots/14946991/media/6e9fe0d0f5276c8719472b4e2e4aa616.png?compress=1&resize=400x300" />
                                <Card.Body>
                                    <Card.Title className='text-center'>Location</Card.Title>
                                    <Card.Text className='text-center'>
                                        950 St Johns Pl Brooklyn, NY, <br />
                                        United States
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                {/* form start  */}
                <div className='container bg-link mt-2'>
                    <h1 className='text-center'>Contact With Us</h1>
                    <div className='p-2 m-5'>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;