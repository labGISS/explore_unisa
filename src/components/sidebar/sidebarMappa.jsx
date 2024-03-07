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

export default function PersistentDrawerLeft({ handleButtonClick, handleSwitchChange, onSendClick, handleNavigationClick }) {


    const buttonStyle = {
        color: '#ffffff',
        backgroundColor: '#2a5934',
        borderColor: '#2a5934',
        width: '100%',
        marginTop: '40px'
    };
    const buttonStyle3 = {
        color: '#ffffff',
        backgroundColor: '#2a5934',
        borderColor: '#2a5934',
        width: '100%',
        marginTop: '40px',
        marginLeft: '10%'
    };
    const buttonStyle2 = {
        color: '#ffffff',
        backgroundColor: '#2a5934',
        borderColor: '#2a5934',
        width: '80%',
        marginTop: '0px',
        marginLeft:'30%',
        marginRight:'30%'
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const [suggestedNames, setSuggestedNames] = useState([]);
    const [suggestedNamesEnd, setSuggestedNamesEnd] = useState([]);
    const myGeoNomi = ["F3", "H", "F2", "F1", "F1", "Biblioteca Scientifica", "Osservatorio dell'Appennino meridionale", "Osservatorio dell'Appennino Meridionale 2", "I1", "E2", "D3", "D2", "B2", "A1", "B1", "A2", "C1", "C2", "D1", "Piscina", "Laboratorio", "Laboratorio", "Laboratorio", "Laboratorio", "Mensa", "Chiostro della pace", "D", "Edisu", "Residenze", "Residenze", "Residenze", "Residenze", "Presidio Sanitario e Poste", "Unicredit Bank", "F", "E", "C", "B", "Residenze", "Laboratorio Modelli", "Masseria", "Masseria", "Bibllioteca umanistica"];
    const options =["F3", "H", "F2","E1", "F1","F", "E", "C", "B", "I1", "E2", "D3", "D2", "B2", "A1", "B1", "A2", "C1", "C2", "D1", "D","Biblioteca Scientifica", "Osservatorio dell'Appennino meridionale", "Osservatorio dell'Appennino Meridionale 2",  "Piscina", "Laboratorio", "Mensa", "Chiostro della pace",  "Edisu", "Residenze", "Presidio Sanitario e Poste", "Unicredit Bank",  "Residenze", "Laboratorio Modelli", "Masseria", "Bibllioteca umanistica","Piazza del Sapere", "Piazza delle Scienze Matematiche Fisiche e Naturali", "Piazza Renato Cacciappoli", "Piazza De Rosa", "Piazza della Scienza e della Tecnica Giulio Natta", "Piazza Renato Maria Capocelli", "Piazza della Politica", "Piazza della Costituzione Italiana", "Piazza Pomponio Leto", "Piazza dell'Economia", "Piazza Primo Levi", "Piazza dell'Industria", "Piazza delle Costruzioni", "Piazza Mario Napoli", "Piazza della Società"];

    const piazzeNomi = ["Piazza del Sapere", "Piazza delle Scienze Matematiche Fisiche e Naturali", "Piazza Renato Cacciappoli", "Piazza De Rosa", "Piazza della Scienza e della Tecnica Giulio Natta", "Piazza Renato Maria Capocelli", "Piazza della Politica", "Piazza della Costituzione Italiana", "Piazza Pomponio Leto", "Piazza dell'Economia", "Piazza Primo Levi", "Piazza dell'Industria", "Piazza delle Costruzioni", "Piazza Mario Napoli", "Piazza della Società"];

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
    const leggiTesto = (testo) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(testo);
        utterance.addEventListener('end', () => {
            synth.cancel(); // Interrompe la sintesi vocale alla fine della lettura
        });
        synth.speak(utterance);
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
                    <Typography variant="h6" noWrap component="div">
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
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Link to="/" style={{ textDecoration: 'none', position: 'absolute', top: 30, left: 20, zIndex: 9999 }}>
                    <Button variant="contained" color="primary" style={buttonStyle3}>
                        Torna alla Home
                    </Button>
                </Link>
                <Divider />
                <List sx={{ backgroundColor: '#ffffff' }}>
                    <Row className="mt-3" >
                        <ListItemButton onClick={() => handleButtonClick("Bus")} style={{marginTop:"30px"}}>
                        <Col className="d-flex align-items-center">
                            <Icon icon={ic_directions_bus} size={50} style={{ marginLeft: "8px",  color:'#3744d9'}} />
                            <h6 className="ml-1 mb-0">BUS</h6>
                        </Col>
                        </ListItemButton>
                    </Row>
                    <Row className="mt-3">
                        <ListItemButton onClick={() => handleButtonClick("Edifici")}>
                        <Col className="d-flex align-items-center" style={{paddingRight:'0px'}}>
                            <Icon icon={ic_location_city_outline} size={50} style={{ marginLeft: "8px", color:'#abcdef' }} />
                            <h6 className="ml-2 mb-0">EDIFICI</h6>
                        </Col>
                        </ListItemButton>
                    </Row>
                    <Row className="mt-3" >
                        <ListItemButton onClick={() => handleButtonClick("Piazze")}>
                        <Col className="d-flex align-items-center">
                            <Icon icon={ic_tour} size={50} style={{ marginLeft: "8px", color:'#a1eca7'}} />
                            <h6 className="ml-2 mb-0">PIAZZE</h6>
                        </Col>
                        </ListItemButton>
                    </Row>

                    {/*{['Piazze', 'Bus', 'Edifici','Elimina Percorso'].map((text, index) => (*/}
                    {/*    <ListItem key={text} disablePadding>*/}
                    {/*        <ListItemButton onClick={() => handleButtonClick(text)}>*/}
                    {/*            <Avatar style={{ backgroundColor: getCircleColor(text) }}>*/}
                    {/*                /!* Puoi inserire il testo all'interno dell'Avatar per mostrare le iniziali o il numero se necessario *!/*/}
                    {/*                {text.charAt(0)}*/}
                    {/*            </Avatar>*/}
                    {/*            <ListItemText primary={text} />*/}
                    {/*        </ListItemButton>*/}
                    {/*    </ListItem>*/}

                    {/*))}*/}
                </List>

            </Drawer>

            <Main open={open} style={{display:"none" }}>
                <DrawerHeader />

            </Main>
        </Box>
    );
}
