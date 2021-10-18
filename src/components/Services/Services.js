import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services] = useServices()
    return (
        <div className='w-100 my-4 p-5'>
            <p className='text-center p-4 text-color-services'>Services</p>
            <h1 className='text-center'>Eye Care Services</h1>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </div>





        </div>
    );
};

export default Services;