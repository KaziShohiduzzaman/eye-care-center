import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Testimonials.css'
const Testimonials = () => {
    return (
        <div>
            <div className='w-100 my-4 p-5'>
                <p className='text-center p-4 text-color-services'>Testimonials</p>
                <h1 className='text-center'>What Our Patients Say About Us</h1>
                <div>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='shadow-lg p-4 bg-warning rounded'>
                                <div className='test-main'>
                                    <img className='img-fluid test-img' src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt="" />
                                    <div>
                                        <h4>Lorisa Teara</h4>
                                        <small>Business Man</small>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-3'>Good maintainence of rooms. Nice geusture by nursing staff. Overall had a very good experience and feel at home. Good job. Cheers..!</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='mt-3'>
                            <div className='shadow-lg p-4 bg-warning rounded'>
                                <div className='test-main'>
                                    <img className='img-fluid test-img' src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg" alt="" />
                                    <div>
                                        <h4>Tom Henry</h4>
                                        <small>Manager</small>
                                    </div>
                                </div>
                                <div>
                                    <p className='mt-3'>Hospital is maintained excellently. No problems for patients. Thanks to Dr.Mallikarjuna & his team for giving greatest service to the patients.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;