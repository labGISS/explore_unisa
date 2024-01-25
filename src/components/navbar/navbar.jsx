import React, { useState } from 'react';
import 'C:/Users/UTENTE/IdeaProjects/explore_unisa/src/components/navbar/navbar.css'; // Assicurati di creare un file CSS per lo stile della navbar

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Logo</div>

            {/* Navbar links for larger screens */}
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

            {/* Mobile menu button */}
            <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                <span>&#9776;</span> {/* Hamburger icon */}
            </div>

            {/* Navbar links for mobile screens */}
            {isMobileMenuOpen && (
                <ul className="mobile-navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
