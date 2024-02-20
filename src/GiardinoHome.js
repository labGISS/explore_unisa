import Carousel from '../src/components/Carousel/Carousel';
import Navbar from '../src/components/navbar/navbar';
import Card from '../src/components/card/card';
import Footer from '../src/components/footer/footer';
import immagine1 from "C:/Users/UTENTE/IdeaProjects/explore_unisa/src/image/immagine1.JPG"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

function GiardinoHome(){
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Row className="justify-content-center my-4 mx-0">
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Giardino della legalità"}
                          imageUrl={immagine1}
                          text={"questa è una prova"}
                          btnText={"Scopriamolo"}
                         />
                </Col>
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Giardino della legalità"}
                          imageUrl={immagine1}
                          text={"questa è una prova"}
                          btnText={"Scopriamolo"}
                        />
                </Col>
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Giardino della legalità"}
                          imageUrl={immagine1}
                          text={"questa è una prova"}
                          btnText={"Scopriamolo"}
                         />
                </Col>
            </Row>
            <Footer/>
        </div>
    )


}

export default GiardinoHome;