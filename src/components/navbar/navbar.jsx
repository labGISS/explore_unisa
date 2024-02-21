import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar data-bs-theme="light" style={{ 'color': 'white', 'backgroundColor': '#2a5934', 'boxShadow': '0px 0px 15px black', 'z-index': '54'}}>
                <Container fluid>
                    <Navbar.Brand href="/" style={{ 'color': 'white' }}>Explore UNISA</Navbar.Brand>
                    <Nav className="me-auto" >
                        <Nav.Link href="/Mappa" style={{ 'color': 'white' }}>Mappa</Nav.Link>
                        <Nav.Link href="/SimpleMap" style={{ 'color': 'white' }}>Navigatore</Nav.Link>
                        <Nav.Link href="/Giardino" style={{ 'color': 'white' }}>Giardino della legalità</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;