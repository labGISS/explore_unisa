import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar/navbar.jsx';
import RecipeReviewCard from '../src/components/card/card.jsx';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Button variant="contained">Contained</Button>
        <RecipeReviewCard/>

    </div>
  );
}

export default App;
