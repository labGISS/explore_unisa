import Carousel from '../src/components/caroselloDettaglio/caroselloDettaglio';
import Navbar from '../src/components/navbar/navbar';
import Card from '../src/components/CardFigma/cardFigma';
import Footer from '../src/components/footer/footer';
import immagine1 from "./image/immagine1.JPG";
import image1 from "./image/img.png";
import vittima1 from "./image/1.jpg";
import vittima2 from "./image/2.jpg";
import vittima3 from "./image/3.jpg";
import vittima4 from "./image/4.jpg";
import vittima5 from "./image/5.jpg";
import vittima6 from "./image/6.jpg";
import vittima7 from "./image/7.jpg";
import Diana1 from "./image/DianaUlivo1.jpg";
import Diana2 from "./image/DianaUlivo2.jpg";
import Beneventano1 from "./image/BeneventanoUlivo1.jpg";
import Beneventano2 from "./image/BeneventanoUlivo2.jpg";
import DelPrete1 from "./image/DelPreteUlivo1.jpg";
import DelPrete2 from "./image/DelPreteUlivo2.jpg";
import Lamberti1 from "./image/LambertiUlivo1.jpg";
import Lamberti2 from "./image/LambertiUlivo2.jpg";
import Ferraioli1 from "./image/FerraioliUlivo1.jpg";
import Ferraioli2 from "./image/FerraioliUlivo2.jpg";
import Musella2 from "./image/MusellaUlivo2.jpg";
import Musella1 from "./image/MusellaUlivo1.jpg";
import Romano1 from "./image/RomanoUlivo1.jpg";
import Romano2 from "./image/RomanoUlivo2.jpg";
import Torre2 from "./image/TorreUlivo2.jpg";
import Torre1 from "./image/TorreUlivo1.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from './vittime.json'
import React from "react";
function PaginaUlivo(){
    const {id} = useParams();
    const vittima = data.vittime_mafia.find(v => v.id === parseInt(id));
    if(!vittima){
        console.log('vittima non trovata')
        return <div>Vittima non trovata</div>
    }
    var images = [];

    var backgroundImageUrl;

    switch (parseInt(id)) {
        case 1:
            backgroundImageUrl = vittima1;
            images = [Diana1, Diana2];
            break;
        case 2:
            backgroundImageUrl = vittima2;
            images = [Beneventano1, Beneventano2];
            break;
        case 3:
            backgroundImageUrl = vittima3;
            images = [Torre1, Torre2];
            break;
        case 4:
            backgroundImageUrl = vittima4;
            images = [Lamberti1, Lamberti2];
            break;
        case 5:
            backgroundImageUrl = vittima5;
            images = [Ferraioli1, Ferraioli2];
            break;
        case 6:
            backgroundImageUrl = vittima6;
            images = [Musella1, Musella2];
            break;
        case 7:
            backgroundImageUrl = vittima7;
            images = [DelPrete1, DelPrete2];
            break;
        default:
            backgroundImageUrl = 'url(percorso_dell_immagine_per_id_default)';
    }

    return(
        <div>
            <Navbar/>
            <Container className="fluid mb-4">
                <Row className="my-4">
                    <h3>{vittima.nome}</h3>
                    <Col md="2" style={{
                        backgroundImage : `url(${backgroundImageUrl})`,
                        backgroundSize : 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition:'center center',
                        minHeight:'400px'
                    }}>
                    </Col>
                    <Col>
                        <div className="">
                            <p>{vittima.testo}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Carousel images={images} />
                </Row>
            </Container>
            <Footer/>
        </div>

    );
}
export default PaginaUlivo;

