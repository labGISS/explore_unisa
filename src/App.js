import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar.jsx';
import RecipeReviewCard from '../src/components/card/card.jsx';
import CardFigma from '../src/components/CardFigma/cardFigma.jsx';
import cardBoot from '../src/components/CardFigma/cardBoot.jsx';
import {Button, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
function App() {
  const nuovo_titolo="Saverio Napolitano";
  return (
    <div className="App">
      <Navbar/>

        <Grid container spacing={6} justifyContent="center"  alignItems="flex-end" >
            <Grid item >
                <MDBCard/>
            </Grid>
            <Grid item >
                <CardFigma />
            </Grid>
            <Grid item >
                <CardFigma />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
