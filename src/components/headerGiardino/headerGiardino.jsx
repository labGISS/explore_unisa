import React from 'react';
import Navbar from "../navbar/navbar";
import { Carousel } from 'react-bootstrap';
import fotoGiardino1 from "../../image/fotoGiardino1.JPG";
import fotoGiardino2 from "../../image/fotoGiardino2.JPG";
import fotoGiardino3 from "../../image/fotoGiardino3.JPG";
import fotoGiardino4 from "../../image/giardinoQgis.png";

export default function HeaderGiardino() {
    return (
        <header>
            <Navbar />
            <div className='text-center bg-image'>
                <Carousel style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
                    <Carousel.Item>
                        <img src={fotoGiardino2} className="d-block w-100" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fotoGiardino4} className="d-block w-100" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={fotoGiardino3} className="d-block w-100" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </header>
    );
}
