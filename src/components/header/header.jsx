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
export default function Header() {
    const [showBasic, setShowBasic,openBasic, setOpenBasic] = useState(false);

    return (
        <header>
            <Navbar/>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url(${unisaImage})`, height: '700px'}}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>Explore UNISA</h1>
                            <h3 className='mb-3'>Un nuovo modo di vivere il tuo campus</h3>
                            <MDBBtn  tag={Link} to="/SimpleMap" outline size="lg" className="text-white" style={{ cursor: 'pointer' }}>
                                Apri la mappa
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}