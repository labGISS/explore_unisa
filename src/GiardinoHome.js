import { useState, useEffect } from 'react';
import Carousel from '../src/components/Carousel/Carousel';
import Navbar from '../src/components/navbar/navbar';
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
function GiardinoHome() {
    useEffect(() => {
        // Stampare i dati in console
        console.log(vittime);
    }, []);

    return (
        <div>
            <Navbar/>

            <Container>
                {/*{vittime.map(vittima =>(*/}
                {/*    <Card key*/}
                {/*))}*/}
                {/*<Row className="justify-content-center my-4 mx-0">*/}
                {/*    {Array.isArray(vittimeData) && vittimeData.map((vittima, index) => (*/}
                {/*        <Col key={index} className="text-center d-flex justify-content-center">*/}
                {/*            <Card title={vittima.nome} // Assumi che il nome della vittima sia il titolo*/}
                {/*                  imageUrl={immagine1} // Immagine di esempio, puoi passare l'URL dell'immagine dal JSON se presente*/}
                {/*                  text={vittima.descrizione} // Testo della descrizione dalla vittima*/}
                {/*                  btnText={"Scopriamolo"}*/}
                {/*                // Se necessario, puoi aggiungere un link alla pagina della vittima*/}
                {/*                // <Link to={`/vittime/${vittima.id}`}>Scopriamolo</Link>*/}
                {/*            />*/}
                {/*        </Col>*/}
                {/*    ))}*/}
                {/*</Row>*/}
            </Container>
            <Footer/>
        </div>
    );
}

export default GiardinoHome;