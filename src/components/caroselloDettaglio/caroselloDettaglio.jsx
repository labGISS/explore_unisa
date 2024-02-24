import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ images }) => {
    // Altezza massima desiderata per il carousel
    const maxHeight = 500;

    return (
        <Carousel style={{maxHeight:'300px', margin:'auto'}}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index}`}
                        style={{
                            maxHeight: maxHeight + 'px',
                            width: 'auto',
                            margin: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MyCarousel;
