import React, { useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import unisaImage from './unisa2.png';
import { Link } from 'react-router-dom';
import SimpleMap from "../../SimpleMap";
import Navbar from "../navbar/navbar";
import { Carousel, Image } from 'react-bootstrap';
import fotoGiardino1 from "../../image/fotoGiardino1.JPG"
import fotoGiardino2 from "../../image/fotoGiardino2.JPG"
import fotoGiardino3 from "../../image/fotoGiardino3.JPG"

export default function HeaderGiardino() {
    const [showBasic, setShowBasic,openBasic, setOpenBasic] = useState(false);

    return (
        <header>
            <Navbar/>
            <div
                className='text-center bg-image'
                style={{height: '700px',}}
            >
                <Carousel>
                    <Carousel.Item>
                        <Image src={fotoGiardino1}/>

                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={fotoGiardino2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={fotoGiardino3} style={{width:'1280px'}}/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </header>
    );
}