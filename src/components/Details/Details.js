import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './Details.css'

const Details = () => {
    const { detailsId } = useParams();
    const [services] = useServices([]);
    const [details, setDetails] = useState({});
    const intDetailsId = parseInt(detailsId);
    useEffect(() => {
        const matchDetails = services.find(service => service.key === intDetailsId)
        setDetails(matchDetails)
    }, [services, intDetailsId])
    return (
        <div className='details-bg'>
            <Row>
                <Col xs={12} md={6}>
                    <img className='img-fluid details-img' src={details?.image} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <h3 className='my-5'>Service Name : {details?.name}</h3>
                    <p>Details : {details?.description}</p>
                    <p>People Satisfaction : {details?.rating} Out Of 5</p>
                    <h5>Operation Cost : <span className='fs-1 text-danger'>${details?.cost}</span></h5>
                </Col>
            </Row>
        </div>
    );
};

export default Details;