import React, { useState } from "react";
import { Icon } from 'react-icons-kit';
import { ic_menu_outline } from 'react-icons-kit/md/ic_menu_outline';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import MediaQuery from 'react-responsive';

function ColorSchemesExample() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <MediaQuery maxWidth={768}>
                {(matches) => {
                    if (matches) {
                        return (
                            <Icon
                                size={32}
                                icon={ic_menu_outline}
                                style={{ color: "white", cursor: "pointer", position: "absolute", right: "20px", top: "30px", transform: "translateY(-50%)", zIndex: "999" }}
                                onClick={toggleNavbar}
                            />
                        );
                    } else {
                        return null;
                    }
                }}
            </MediaQuery>
            <Navbar data-bs-theme="light" expand="lg" style={{ 'color': 'white', 'backgroundColor': '#2a5934', 'boxShadow': '0px 0px 15px black', 'zIndex': '54' }}>
                <Container>
                    <Navbar.Brand href="/" style={{ 'color': 'white' }}>Explore UNISA</Navbar.Brand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
                        <Nav className="me-auto">
                            <Nav.Link href="/Mappa" style={{ 'color': 'white', marginRight: '20px' }}>Mappa</Nav.Link>
                            <Nav.Link href="/SimpleMap" style={{ 'color': 'white', marginRight: '20px' }}>Navigatore</Nav.Link>
                            <Nav.Link href="/Giardino" style={{ 'color': 'white', marginRight: '20px' }}>Giardino della legalità</Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;
