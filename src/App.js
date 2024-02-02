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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import SimpleMap from './SimpleMap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SimpleMap" element={<SimpleMap />} />
                {/* Altre rotte possono essere aggiunte qui */}
            </Routes>
        </Router>
    );
}

// Componente Home
function Home() {
    return (
        <div>
            <Header />
            <Grid container spacing={10} justifyContent="center" alignItems="flex-end" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid item>
                    <CardFigma />
                </Grid>
                <Grid item>
                    <CardFigma />
                </Grid>
                <Grid item>
                    <CardFigma />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}

export default App;