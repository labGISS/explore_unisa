import Carousel from '../src/components/Carousel/Carousel';
import Navbar from '../src/components/navbar/navbar';
import Card from '../src/components/CardFigma/cardFigma';
import Footer from '../src/components/footer/footer';
import immagine1 from "./image/immagine1.JPG";
import image1 from "./image/img.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let testo = "Don Giuseppe Diana nasce a Casal di Principe il 4 luglio del 1958. Il papà, Gennaro e la mamma Iolanda di Tella, vivono lavorando la terra. Giuseppe è il primo di tre figli. Gli altri due sono Emilio e Marisa. Giuseppe entra nel seminario vescovile di Aversa nell’ottobre del 1968, appena compiuto i dieci anni di età,  dove consegue la licenza media e quella classica liceale. La famiglia faceva enormi sacrifici per farlo studiare. Il padre doveva pagare una retta. Ma ai genitori interessava innanzitutto toglierlo dalla strada. Casal di Principe era un paese difficile. Tornava a casa solo a Pasqua e a Natale. Conseguì la licenza liceale con ottimi voti. Tanto che vinse anche una borsa di studio. Il Vescovo dell’epoca, Antonio Cece, diceva che Giuseppe non era un prete come gli altri e  che doveva fare carriera, doveva andare a Roma. Dopo la licenza Liceale il giovane Giuseppe Diana entra nell’Almo Collegio Capranica di Roma per diventare sacerdote. Comincia a frequentare i corsi di Filosofia e Teologia nella Pontificia Facoltà Gregoriana. In un primo momento ci andò contento. Poi cominciò a ricredersi. Al ragazzo, che era  giovane allegro, gioviale, ma anche un po’ esuberante, quel clima austero del collegio e il distacco dal suo mondo, gli stavano un po’ stretti. Così cominciò a tempestare di telefonate la mamma perché non ci voleva più stare in quell’istituto. Alla fine tornò a casa. S’iscrisse alla facoltà di Ingegneria dell’università Federico II di Napoli. Ma anche questo non gli bastava. Era sempre triste, pensieroso. Questa sua crisi durò all’incirca tre mesi, durante i quali  diede anche un esame ad ingegneria. Più passava il tempo e più si incupiva. Finché un giorno prese sua madre da parte e le confidò:  “Mamma voglio tornare in seminario. Non ce la faccio più a stare fuori”. Andò da solo a parlare col vescovo di Aversa, Monsignor Antonio Cece, che gli consigliò di attendere ancora qualche mese prima di rientrare in seminario. Ma lui rispose che la scelta l’aveva già fatta. Quello stesso pomeriggio se ne andò a Napoli, al seminario di Posillipo. Da allora non ebbe più incertezze sulle sue scelte. Venne ordinato sacerdote il 14 marzo del 1982. Don Diana, da giovane prete, aveva un rapporto speciale con i ragazzi. Anche perché nel frattempo era diventato prete."
function PaginaUlivo() {
    return (
        <div>
            <Navbar/>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/800x400"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Prima Immagine</h3>
                                    <p>Descrizione della prima immagine.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/800x400"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Seconda Immagine</h3>
                                    <p>Descrizione della seconda immagine.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/800x400"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Terza Immagine</h3>
                                    <p>Descrizione della terza immagine.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className="text-center mt-4">
                            <h3>Don Beppe Diana</h3>
                            <img src={image1}/>
                            <p>{testo}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>

    );
}
    export default PaginaUlivo;
