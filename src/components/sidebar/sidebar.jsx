import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from "@mui/material/Avatar";
import {yellow} from "@mui/material/colors";
import {Link} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from 'react-icons-kit'
import {ic_accessible_forward_outline} from 'react-icons-kit/md/ic_accessible_forward_outline';
import {ic_directions_bus} from 'react-icons-kit/md/ic_directions_bus'
import {ic_volume_up_twotone} from 'react-icons-kit/md/ic_volume_up_twotone'
import {ic_location_city_outline} from 'react-icons-kit/md/ic_location_city_outline'
import {ic_tour} from 'react-icons-kit/md/ic_tour'
import {ic_delete_forever} from 'react-icons-kit/md/ic_delete_forever'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import scrittaNeroVerde from "../../image/logo/8.png";
import maps from "../../image/icone/maps.png"
import gis2 from"../../image/icone/GIS2.png"
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        marginLeft: `-${drawerWidth}px`,

        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,

            }),
            marginLeft: 0,


        }),
    }),
    
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',

})(({ theme, open }) => ({

    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function PersistentDrawerLeft({ handleButtonClick, onSendClick, handleNavigationClick }) {


    const buttonStyle = {
        color: '#ffffff',
        backgroundColor: '#2a5934',
        borderColor: '#2a5934',
        width: '100%',
        marginTop: '40px'
    };
    const buttonStyleElimina = {
        color: '#2a5934',
        backgroundColor: '#ffffff',
        borderColor: '#2a5934',
        width: '80%',
        marginTop: '15px',
        fontWeight: 'bold', 
        fontFamily: 'Arial, sans-serif',
        textTransform: 'capitalize',
        borderRadius: '15px'
    };

    const buttonStyleCalcola = {
        color: '#ffffff',
        backgroundColor: '#2a5934',
        borderColor: '#2a5934',
        width: '80%',
        fontWeight: 'bold', 
        fontFamily: 'Arial, sans-serif',
        textTransform: 'capitalize',
        borderRadius: '15px'
    };

    const textStyle1 = {
        color: '#ffffff',
        width: '50%',
        fontFamily: 'Arial, sans-serif'
    };


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const [suggestedNames, setSuggestedNames] = useState([]);
    const [suggestedNamesEnd, setSuggestedNamesEnd] = useState([]);
    const myGeoNomi = ["F3", "H", "F2", "F1", "F1", "Biblioteca Scientifica", "Osservatorio dell'Appennino meridionale", "Osservatorio dell'Appennino Meridionale 2", "I1", "E2", "D3", "D2", "B2", "A1", "B1", "A2", "C1", "C2", "D1", "Piscina", "Laboratorio", "Laboratorio", "Laboratorio", "Laboratorio", "Mensa", "Chiostro della pace", "D", "Edisu", "Residenze", "Residenze", "Residenze", "Residenze", "Presidio Sanitario e Poste", "Unicredit Bank", "F", "E", "C", "B", "Residenze", "Laboratorio Modelli", "Masseria", "Masseria", "Bibllioteca umanistica"];
    const options =["F3", "H", "F2","E1", "F1","F", "E", "C", "B", "I1", "E2", "D3", "D2", "B2", "A1", "B1", "A2", "C1", "C2", "D1", "D","Biblioteca Scientifica", "Osservatorio dell'Appennino meridionale", "Osservatorio dell'Appennino Meridionale 2",  "Piscina", "Laboratorio", "Mensa", "Chiostro della pace",  "Edisu", "Residenze", "Presidio Sanitario e Poste", "Unicredit Bank",  "Residenze", "Laboratorio Modelli", "Masseria", "Bibllioteca umanistica","Piazza del Sapere", "Piazza delle Scienze Matematiche Fisiche e Naturali", "Piazza Renato Cacciappoli", "Piazza De Rosa", "Piazza della Scienza e della Tecnica Giulio Natta", "Piazza Renato Maria Capocelli", "Piazza della Politica", "Piazza della Costituzione Italiana", "Piazza Pomponio Leto", "Piazza dell'Economia", "Piazza Primo Levi", "Piazza dell'Industria", "Piazza delle Costruzioni", "Piazza Mario Napoli", "Piazza della Società","NULLBaby Point di Ateneo - Nursery",
        "Biblioteca centrale del Polo Umanistico \"E. R. Caianiello\"",
        "Biblioteca del Polo Scientifico",
        "Cappella",
        "Centro di Ateneo per l'Orientamento e il Tutorato (CAOT)\n",
        "Centro Stampa d'Ateneo",
        "Bancomat Unicredit",
        "Internet Point Segreterie Studenti",
        "Posto di Polizia",
        "Presidio Sanitario Polispecialistico dell'Università di Salerno",
        "Residenze",
        "Teatro di Ateneo “Filippo Alison”",
        "Terminal Bus",
        "Ufficio Postale",
        "Ufficio Diritto allo Studio",
        "Ufficio Internazionalizzazione",
        "Ufficio Relazioni con il Pubblico",
        "Aula Magna"];

    const piazzeNomi = ["Piazza del Sapere", "Piazza delle Scienze Matematiche Fisiche e Naturali", "Piazza Renato Cacciappoli", "Piazza De Rosa", "Piazza della Scienza e della Tecnica Giulio Natta", "Piazza Renato Maria Capocelli", "Piazza della Politica", "Piazza della Costituzione Italiana", "Piazza Pomponio Leto", "Piazza dell'Economia", "Piazza Primo Levi", "Piazza dell'Industria", "Piazza delle Costruzioni", "Piazza Mario Napoli", "Piazza della Società"];
    const strutture = [
        "NULLBaby Point di Ateneo - Nursery",
        "Biblioteca centrale del Polo Umanistico \"E. R. Caianiello\"",
        "Biblioteca del Polo Scientifico",
        "Cappella",
        "Centro di Ateneo per l'Orientamento e il Tutorato (CAOT)\n",
        "Centro Stampa d'Ateneo",
        "Bancomat Unicredit",
        "Internet Point Segreterie Studenti",
        "Posto di Polizia",
        "Presidio Sanitario Polispecialistico dell'Università di Salerno",
        "Residenze",
        "Teatro di Ateneo “Filippo Alison”",
        "Terminal Bus",
        "Ufficio Postale",
        "Ufficio Diritto allo Studio",
        "Ufficio Internazionalizzazione",
        "Ufficio Relazioni con il Pubblico",
        "Aula Magna"
    ];
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');


    const handleStartPointChange = (event, newValue) => {
        setStartPoint(newValue);

        // Altri logici se necessario
    }

    const handleEndPointChange = (event, newValue) => {
        setEndPoint(newValue);
    }
    const updateSuggestedNames = (inputValue) => {
        const filteredNames = [...myGeoNomi, ...piazzeNomi].filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));
        setSuggestedNames(filteredNames);
    };
    const updateSuggestedNamesEnd = (inputValue) => {
        const filteredNames = [...myGeoNomi, ...piazzeNomi].filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));
        setSuggestedNamesEnd(filteredNames);
    };
    const getCircleColor = (type) => {
        switch (type) {
            case 'Piazze':
                return 'yellow';
            case 'Bus':
                return 'blue';
            case 'Edifici':
                return 'red';
            default:
                return 'grey'; // Colore di default o modifica a seconda delle tue esigenze
        }
    };

    const handleSendClick = () => {
        // Verifica se entrambi i campi di testo sono compilati prima di inviare i dati
        if (startPoint && endPoint) {
            onSendClick({ startPoint, endPoint });
            handleDrawerClose();
        } else {
            console.log('Compila entrambi i campi prima di inviare.');
        }
    };
    const onSuggestionClick = (name) => {
        // Imposta il valore del textfield con il nome del suggerimento
        setStartPoint(name);
    };
    const onSuggestionClick2 = (name) => {
        // Imposta il valore del textfield con il nome del suggerimento
        setEndPoint(name);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        handleDrawerClose();
    }

    const testoDaLeggere = "Benvenuto nel nostro sistema di navigazione! Con questa app, puoi raggiungere facilmente la tua destinazione in pochi semplici passaggi. Prima di tutto, inserisci la tua posizione di partenza e la destinazione desiderata. Puoi farlo in due modi: digitando gli indirizzi nei campi di testo oppure semplicemente toccando i punti corrispondenti direttamente sulla mappa.Una volta inserite le posizioni, premi il pulsante Invia . L'applicazione calcolerà quindi il percorso ottimale per te e ti mostrerà le istruzioni dettagliate passo-passo per raggiungere la destinazione. Segui attentamente le istruzioni visualizzate sullo schermo. Ti indicheranno le direzioni da seguire, le distanze da percorrere e qualsiasi altra informazione utile per il viaggio. Non dimenticare di esplorare le opzioni aggiuntive dell'applicazione, come la pagina dedicata al Giardino della Legalità dove puoi vedere storie interessanti di lotte contro la mafia. Grazie per l'attenzione"
    // const leggiTesto = (testo) => {
    //     const synth = window.speechSynthesis;
    //     const utterance = new SpeechSynthesisUtterance(testo);
    //     utterance.addEventListener('end', () => {
    //         synth.cancel(); // Interrompe la sintesi vocale alla fine della lettura
    //     });
    //     synth.speak(utterance);
    // };
    let currentlySpeaking = false; // Variabile per tenere traccia dello stato della sintesi vocale

    const leggiTesto = (testo) => {
        const synth = window.speechSynthesis;

        if (currentlySpeaking) {
            // Se la sintesi vocale è attualmente in corso, la interrompiamo
            synth.cancel();
            currentlySpeaking = false;
            return; // Usciamo dalla funzione
        }

        const utterance = new SpeechSynthesisUtterance(testo);
        utterance.addEventListener('end', () => {
            currentlySpeaking = false;
        });

        synth.speak(utterance);
        currentlySpeaking = true;
    };

    const [isSwitchChecked, setIsSwitchChecked] = useState(false);

    const handleSwitchChange = (event) => {
    setIsSwitchChecked(event.target.checked);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}  style={{'backgroundColor': '#2a5934'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={textStyle1}>
                        Naviga il campus
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader >
                    <IconButton
                        color="#2a5934"
                        aria-label="open drawer"
                        onClick={handleDrawerClose}
                        edge="start"
                        sx={{ ml: 2, mr: 2}}
                    >
                        <MenuIcon />
                    
                    </IconButton>
                    
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <img src={scrittaNeroVerde}
                            alt="Torna alla Home"
                            style={{ width: '165px', height: '20px' }}
                        />
                    </Link>
                </DrawerHeader>
                <Divider />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={maps} alt=" " style={{width: '15px', height: '75px', marginLeft: '10px', marginRight: '5px', marginTop: '105px'}} />

                <List style={{marginTop: '30%', marginLeft: '-5px', paddingBottom:'0px', position: 'sticky'}}>

                    <ListItem disablePadding style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '210px', height: '60px', borderRadius: '15px' }}>

                        <Autocomplete 
                            freeSolo
                            options={options}
                            value={startPoint}
                            onChange={handleStartPointChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Scegli il punto di partenza..."
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        style: {borderRadius: '15px', width: '200px', height: '35px', marginTop: "0px", marginBottom: '0px'}
                                    }}
                                    inputProps={{
                                        ...params.inputProps,
                                        style: { height: '100%', width: '100%'}
                                    }}
                                    InputLabelProps={{
                                        style: { textAlign: 'center', lineHeight: '20px', fontSize: '15px' } // Centra l'etichetta verticalmente
                                    }}
                                />
                            )}
                        />
                    </ListItem>
                    <ListItem disablePadding style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '210px', height: '60px', borderRadius: '15px' }}>
                        <Autocomplete
                            freeSolo
                            options={options}
                            value={endPoint}
                            onChange={handleEndPointChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Scegli la destinazione..."
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        style: { borderRadius: '15px', width: '200px', height: '35px' }
                                    }}
                                    inputProps={{
                                        ...params.inputProps,
                                        style: { height: '100%' }
                                    }}
                                    InputLabelProps={{
                                        style: { textAlign: 'center', lineHeight: '20px', fontSize: '15px' } // Centra l'etichetta verticalmente
                                    }}
                                />
                            )}
                        />
                    </ListItem>
                </List>

                </div>

                <List>
                    <ListItem style={{backgroundColor:'#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    
                        <ListItemIcon>
                            <img src={gis2}
                                alt=" "
                                style={{ width: '30px', height: '30x', marginLeft: '10px'}}
                            />
                        </ListItemIcon>
                        
                        <span style={{ marginTop: '8px', marginLeft: '-10px', whiteSpace: 'nowrap', fontSize: '15px'}}>Percorso Sicuro</span>
                        <Form.Check
                            // prettier-ignore
                            style={{marginLeft: "10px", marginTop:"10px", borderColor: '#2a5934'}}
                            type="switch"
                            id="custom-switch"
                            label= ""
                            onChange={handleSwitchChange}
                        />

                   

                    </ListItem>

                    {isSwitchChecked && (
                    <ListItem style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <input class="form-control" id="timeStandard" type="time" style={{width: '50%'}} />
                    </ListItem>
                    )}

                    <ListItem style={{flexDirection: 'column', backgroundColor:'#ffffff', paddingBottom:'10px', marginTop: '5px'}}>
                        
                            <Button variant="contained" onClick={handleSendClick}  style={buttonStyleCalcola}>
                                Calcola Percorso
                            </Button>

                            <Button variant="contained" onClick={() => handleButtonClick("Elimina Percorso")}  style={buttonStyleElimina}>
                                Elimina Percorso
                            </Button>

                            
                    </ListItem>

                </List>
                <div style={{ position: 'absolute', bottom: '0', right: '0', margin: '10px' }}>
                    <IconButton onClick={handleShow}>
                        <InfoIcon style={{ color: 'black' }}/>
                    </IconButton>
                </div>
                

            </Drawer>
            <Modal  show = {show} onHide={handleClose} style={{marginTop:'60px'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Guida</Modal.Title>
                    <Icon icon={ic_volume_up_twotone} size={'32'}
                    onClick={() => leggiTesto(testoDaLeggere)}
                    style={{marginTop:"5px"}}></Icon>
                </Modal.Header>
                <Modal.Body>
                    <h6>Benvenuto al nostro sistema di navigazione! <br/>Con questa app, puoi raggiungere facilmente la tua destinazione in pochi semplici passaggi.</h6>
                    <p>
                        Prima di tutto, inserisci la tua posizione di partenza e la destinazione desiderata. <br/>Puoi farlo in due modi: digitando gli indirizzi nei campi di testo oppure semplicemente toccando i punti corrispondenti direttamente sulla mappa.
                        Una volta inserite le posizioni, premi il pulsante "Invia". L'applicazione calcolerà quindi il percorso ottimale per te e ti mostrerà le istruzioni dettagliate passo-passo per raggiungere la destinazione.
                        Segui attentamente le istruzioni visualizzate sullo schermo. Ti indicheranno le direzioni da seguire, le distanze da percorrere e qualsiasi altra informazione utile per il viaggio.
                        Non dimenticare di esplorare le opzioni aggiuntive dell'applicazione, come la pagina dedicata al Giardino della Legalità dove puoi vedere storie interessanti di lotte contro la mafia.
                        <br/>Grazie per l'attenzione.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Main open={open} style={{display:"none" }}>
                <DrawerHeader />

            </Main>
        </Box>
    );
}

