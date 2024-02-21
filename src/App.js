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
import PaginaUlivo from './PaginaUlivo';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from 'react-router-dom';
import React from "react";
import LeafletMapComponent from "./components/leafletMap/leafletmap";
import Navigazione from "./Navigazione";
import Giardino from "./GiardinoHome"
import immagine1 from "./image/immagine1.JPG"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mappaUnisa from "../src/image/mappaUnisa.png"
import fotoUnisa from "../src/image/fotoUnisa.JPG"
import Mappa from "./Mappa";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Mappa" element={<Mappa />} />
                <Route path="/SimpleMap" element={<SimpleMap />} />
                <Route path="/Navigazione" element={<Navigazione />} />
                <Route path="/Giardino" element={<Giardino />} />
                <Route path="/PaginaUlivo/:id" component={PaginaUlivo} />
                {/* Altre rotte possono essere aggiunte qui */}
            </Routes>
        </Router>
    );
}

// Componente Home
function Home() {
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     // Quando il pulsante viene cliccato, naviga a "/Navigazione"
    //     navigate('/Navigazione');
    // };
    // const handleClickGiardino = () => {
    //     // Quando il pulsante viene cliccato, naviga a "/Navigazione"
    //     navigate('/Giardino');
    // };
    //
    // const handleClick2 = () => {
    //     // Quando il pulsante viene cliccato, naviga a "/Navigazione"
    //     navigate('/SimpleMap');
    // };
    return (
        <div>
            <Header />
            <Row className="justify-content-center my-4 mx-0">
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Giardino della legalità Falcone e Borsellino"}
                          imageUrl={immagine1}
                          text={"Ogni ramo racconta una storia di resilienza e speranza."}
                          btnText={"Scopriamolo"}
                    />
                </Col>
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Mappa del Campus"}
                          imageUrl={mappaUnisa}
                          text={"Clicca qui per esplorare la mappa interattiva del campus."}
                          btnText={"Scopriamolo"}
                    />
                </Col>
                <Col className="text-center d-flex justify-content-center">
                    <Card title={"Navigatore"}
                          imageUrl={fotoUnisa}
                          text={"Ti sei perso?\nTi aiutiamo noi."}
                          btnText={"Scopriamolo"}
                    />
                </Col>
            </Row>
            {/*<Grid container spacing={10} justifyContent="center" alignItems="flex-end" style={{ paddingTop: '20px', paddingBottom: '20px' }}>*/}
            {/*    <Grid item>*/}
            {/*       <Card title={"Giardino della legalità"}*/}
            {/*       imageUrl={immagine1}*/}
            {/*       text={"questa è una prova"}*/}
            {/*       btnText={"Scopriamolo"}*/}
            {/*       onClick={handleClick()}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item>*/}
            {/*        <Card title={"Giardino della legalità"}*/}
            {/*              imageUrl={immagine1}*/}
            {/*              text={"questa è una prova"}*/}
            {/*              btnText={"Scopriamolo"}*/}
            {/*              onClick={handleClick()}/> </Grid>*/}
            {/*    <Grid item>*/}
            {/*        <Card title={"Giardino della legalità"}*/}
            {/*              imageUrl={immagine1}*/}
            {/*              text={"questa è una prova"}*/}
            {/*              btnText={"Scopriamolo"}*/}
            {/*              onClick={handleClick()}/>*/}
            {/*    </Grid>*/}

            {/*</Grid>*/}
            {/*<Button onClick={handleClick}>Vai a Navigazione</Button>*/}
            <Footer />
        </div>
    );
}

export default App;