import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.adityajyoteyehospital.org/images/pedatric-opthmalogy.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-black bg-color py-2 shadow-lg rounded'>Eye Care Specialist Services That You Can Trust</h3>
                        <button className='btn btn-warning'>More Info</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.nicholsoneyeclinic.com/wp-content/uploads/2018/10/Banner_01_edited.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-black bg-color py-2 shadow-lg rounded'>We only give best care in your eyes.</h3>
                        <button className='btn btn-warning'>More Info</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://rsm-media-cdn-live.azureedge.net/cache/5/a/1/b/e/f/5a1bef08eeefaadd9f1a6b63ceebd20c8d6a0188.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-black bg-color py-2 shadow-lg rounded'>High innovation professional eye care.</h3>
                        <button className='btn btn-warning'>More Info</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner; <Carousel fade>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>