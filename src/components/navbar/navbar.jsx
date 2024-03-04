import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'


function ColorSchemesExample() {
    return (
        <>
            <Navbar data-bs-theme="light" expand="lg" style={{ 'color': 'white', 'backgroundColor': '#2a5934', 'boxShadow': '0px 0px 15px black', 'z-index': '54'}}>
                <Container>
                    <Navbar.Brand href="/" style={{ 'color': 'white' }}>Explore UNISA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav.Link href="/Mappa" style={{ 'color': 'white', marginRight:'20px' }}>Mappa</Nav.Link>
                        <Nav.Link href="/SimpleMap" style={{ 'color': 'white', marginRight:'20px' }}>Navigatore</Nav.Link>
                        <Nav.Link href="/Giardino" style={{ 'color': 'white', marginRight:'20px' }}>Giardino della legalità</Nav.Link>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;