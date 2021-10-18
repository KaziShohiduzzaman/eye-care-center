import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { key, name, image, description } = props.service;
    return (
        <div>
            <Col>
                <Card className='shadow-lg'>
                    <Card.Img className='img-fluid image-height' variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 150)}
                        </Card.Text>
                        <Link className='text-decoration-none' to={`details/${key}`}>
                            <button className='btn btn-warning d-block mx-auto'>Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Service;