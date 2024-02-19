import Carousel from '../src/components/Carousel/Carousel';
import Navbar from '../src/components/navbar/navbar';
import Card from '../src/components/CardFigma/cardFigma';
import Footer from '../src/components/footer/footer';
import immagine1 from "./image/immagine1.JPG"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GiardinoHome(){
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Row className="justify-content-center mt-4 mb-4">
                <Col className="text-center">
                    <Card linkImage={immagine1}/>
                </Col>
                <Col className="text-center">
                    <Card linkImage={immagine1}/>
                </Col>
                <Col className="text-center">
                    <Card linkImage={immagine1}/>
                </Col>
            </Row>
            <Footer/>
        </div>
    )


}

export default GiardinoHome;