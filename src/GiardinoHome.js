import { useState, useEffect } from 'react';
import Carousel from '../src/components/Carousel/Carousel';
import Navbar from '../src/components/navbar/navbar';
import Header from '../src/components/headerGiardino/headerGiardino';
import Card from '../src/components/card/card';
import Footer from '../src/components/footer/footer';
import immagine1 from "./image/immagine1.JPG"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SimpleMap from "./SimpleMap";
import Navigazione from "./Navigazione";
import Home from "./App";
import Giardino from "./GiardinoHome";
import vittime from "./vittime.json";
import { Link } from 'react-router-dom';

function GiardinoHome() {
    useEffect(() => {
        // Stampare i dati in console
        console.log(vittime);
    }, []);

    return (
        <div>
            <Header/>
            <div className=" mt-4">
                <h1  className=" text-center">Il giardino della legalità "Falcone e Borsellino" </h1>
                <p  className=" mx-5">
                    Nel Giardino di Ulivi dedicato a Borsellino e Falcone, ogni albero è un monumento vivente, testimone delle vite spezzate dalla mafia. Ogni tronco, ogni ramo, ogni foglia racconta la storia di una vittima, radicando nel terreno la memoria e il coraggio di coloro che hanno combattuto per la legalità. In questo giardino sacro, gli ulivi sono simboli di speranza e rinascita, sprigionando nell'aria un profumo di resilienza e dignità, affinché il ricordo delle vittime continui a illuminare il cammino verso un futuro senza mafia.</p>
            </div>
            <Container>
                <Row className="justify-content-center my-4 mx-0 m-4">
                    {Array.isArray(vittime.vittime_mafia) && vittime.vittime_mafia.map((vittima, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                            <Card title={vittima.nome} // Assumi che il nome della vittima sia il titolo
                                  imageUrl={immagine1} // Immagine di esempio, puoi passare l'URL dell'immagine dal JSON se presente
                                  text={vittima.descrizione} // Testo della descrizione dalla vittima
                                  btnText={"Scopriamolo"}/>
                          </Col>
                    ))}
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default GiardinoHome;