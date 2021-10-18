import React from 'react';
import './AboutUs.css'
import aboutPic from '../../images/about us/about us.jpg'
import aboutPic2 from '../../images/about us/about us 2.jpg'
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div>
            <div className='about-bg-banner'>
                <div className='text-center py-4 bg-link'>
                    <NavLink
                        className='fs-4 text-decoration-none'
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className='fs-4 text-decoration-none'
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        <span> | About Us</span>
                    </NavLink>
                </div>
                <img className='img-fluid' src={aboutPic} alt="" />
            </div>
            <Row className='p-4 bg-about'>
                <Col xs={12} md={6} className='p-4'>
                    <img className='img-fluid' src={aboutPic2} alt="" />
                </Col>
                <Col xs={12} md={6} className='p-4'>
                    <h1>We Are Caring For Your Eye Health Hospital</h1>
                    <p>Bangladesh Eye Hospital Ltd. (BEH) first started from a rented 5 storied building at Dhanmondi Road No. </p>
                    <div className='check-Mark'>
                        <div>
                            <p><i class="far fa-check-square me-1 icon-about"></i>Conducts eye health checkups</p>
                            <p><i class="far fa-check-square me-1 icon-about"></i>Best lasik treatment</p>
                            <p><i class="far fa-check-square me-1 icon-about"></i>Treats minor illnesses</p>
                        </div>
                        <div>
                            <p><i class="far fa-check-square me-1 icon-about"></i>Special eye exam</p>
                            <p><i class="far fa-check-square me-1 icon-about"></i>Contact lens service</p>
                            <p><i class="far fa-check-square me-1 icon-about"></i>Special Retina exam</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;