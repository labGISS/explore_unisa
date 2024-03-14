import { useState, useEffect } from 'react';
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
import Home from "./App";

import vittime from "./vittime.json";
import { Link } from 'react-router-dom';
import PaginaUlivo from './PaginaUlivo';
import fotoMimmo from './image/BeneventanoUlivo1.jpg';
import fotoDiana from './image/DianaUlivo1.jpg';
import fotoTorre from './image/TorreUlivo2.jpg';
import fotoLamberti from './image/LambertiUlivo1.jpg';
import fotoFerraioli from './image/FerraioliUlivo2.jpg';
import fotoMusella from './image/MusellaUlivo2.jpg';
import fotoDelPrete from './image/DelPreteUlivo2.jpg';


function GiardinoHome() {

    useEffect(() => {
        // Stampare i dati in console
        console.log(vittime);
    }, []);

    const getImageForTitle = (title) => {
        switch (title) {
            case "Don Giuseppe Diana":
                return fotoDiana;
                break;
            case "Mimmo Beneventano":
                return fotoMimmo;
                break;
            case "Marcello Torre":
                return fotoTorre;
                break;
            case "Simonetta Lamberti":
                return fotoLamberti;
                break;
            case "Antonio Esposito Ferraioli":
                return fotoFerraioli;
                break;
            case "Gennaro Musella":
                return fotoMusella;
                break;
            case "Federico Del Prete":
                return fotoDelPrete;
                break;
            default:
                return immagine1;
        }
    };

    return (
        <div>
            <Header/>
            <div className="mt-4 mx-1">
                <h1 className=" text-center">Il giardino della legalità "Falcone e Borsellino" </h1>
                <p  className=" mx-5">
                    Nel Giardino di Ulivi dedicato a Borsellino e Falcone, ogni albero è un monumento vivente, testimone delle vite spezzate dalla mafia. Ogni tronco, ogni ramo, ogni foglia racconta la storia di una vittima, radicando nel terreno la memoria e il coraggio di coloro che hanno combattuto per la legalità. In questo giardino sacro, gli ulivi sono simboli di speranza e rinascita, sprigionando nell'aria un profumo di resilienza e dignità, affinché il ricordo delle vittime continui a illuminare il cammino verso un futuro senza mafia.</p>
            </div>
            <Container>
                <Row className="justify-content-center my-4 mx-0 m-4">
                    {Array.isArray(vittime.vittime_mafia) && vittime.vittime_mafia.map((vittima, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex align-items-center justify-content-center">
                            <Card title={vittima.nome}
                                  imageUrl={getImageForTitle(vittima.nome)}
                                  text={vittima.descrizione}
                                  btnText={"Scopriamolo"}
                                  linkTo={`/PaginaUlivo/${vittima.id}`}
                                />
                          </Col>
                    ))}
                </Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default GiardinoHome;