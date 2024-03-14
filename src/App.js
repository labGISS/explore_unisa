import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar.jsx';
import RecipeReviewCard from '../src/components/card/card.jsx';
import CardFigma from '../src/components/CardFigma/cardFigma.jsx';
import Header from '../src/components/header/header.jsx';
import CardBoot from '../src/components/cardBoot/cardBoot.jsx';
import Footer from '../src/components/footer/footer.jsx';
import MapWithRouting from '../src/components/mapwithrouting/MapWithRouting.jsx';
import {Button, Grid} from '@mui/material';
import Card from './components/card/card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleMap from './SimpleMap';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import React from "react";
import Giardino from "./GiardinoHome"
import Percorsi from "./PercorsiTematici";
import immagine1 from "./image/immagine1.JPG"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mappaUnisa from "../src/image/mappaUnisa.png"
import fotoUnisa from "../src/image/fotoUnisa.JPG"
import PaginaUlivo from './PaginaUlivo';
import Mappa from "./Mappa";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mappa" element={<Mappa />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/SimpleMap" element={<SimpleMap />} />
                <Route path="/Giardino" element={<Giardino />} />
                <Route path="/PaginaUlivo/:id" element={<PaginaUlivo/>} />
                <Route path="/Percorsi" element={<Percorsi />} />
            </Routes>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <Header />
            <Row className="justify-content-center my-4 mx-0">
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Giardino della legalità Falcone e Borsellino"}
                          imageUrl={immagine1}
                          text={"Ogni ramo racconta una storia di resilienza e speranza."}
                          linkTo={"/Giardino"}
                          btnText={"Scopriamolo"}
                    />
                </Col>
                <Col className="text-center d-flex justify-content-center my-2">
                    <Card title={"Mappa del Campus"}
                          imageUrl={mappaUnisa}
                          text={"Clicca qui per esplorare la mappa interattiva del campus."}
                          linkTo={"/Mappa"}
                          btnText={"Scopriamolo"}
                    />
                </Col>
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Navigatore"}
                          imageUrl={fotoUnisa}
                          text={"Ti sei perso?\nTi aiutiamo noi."}
                          linkTo={"/SimpleMap"}
                          btnText={"Scopriamolo"}
                    />
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
export default App;