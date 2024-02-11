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

export default function PersistentDrawerLeft({ handleButtonClick, onSendClick }) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const [suggestedNames, setSuggestedNames] = useState([]);
    const [suggestedNamesEnd, setSuggestedNamesEnd] = useState([]);
    const myGeoNomi = ["F3", "H", "F2", "F1", "F1", "Biblioteca Scientifica", "Osservatorio dell'Appennino meridionale", "Osservatorio dell'Appennino Meridionale 2", "I1", "E2", "D3", "D2", "B2", "A1", "B1", "A2", "C1", "C2", "D1", "Piscina", "Laboratorio", "Laboratorio", "Laboratorio", "Laboratorio", "Mensa", "Chiostro della pace", "D", "Edisu", "Residenze", "Residenze", "Residenze", "Residenze", "Presidio Sanitario e Poste", "Unicredit Bank", "F", "E", "C", "B", "Residenze", "Laboratorio Modelli", "Masseria", "Masseria", "Bibllioteca umanistica"];
    const options =["F3", "H", "F2", "F1", "F1", "Biblioteca Scientifica", "Osservatorio dell'Appennino meridionale", "Osservatorio dell'Appennino Meridionale 2", "I1", "E2", "D3", "D2", "B2", "A1", "B1", "A2", "C1", "C2", "D1", "Piscina", "Laboratorio", "Laboratorio", "Laboratorio", "Laboratorio", "Mensa", "Chiostro della pace", "D", "Edisu", "Residenze", "Residenze", "Residenze", "Residenze", "Presidio Sanitario e Poste", "Unicredit Bank", "F", "E", "C", "B", "Residenze", "Laboratorio Modelli", "Masseria", "Masseria", "Bibllioteca umanistica"];

    const piazzeNomi = ["Piazza del Sapere", "Piazza delle Scienze Matematiche Fisiche e Naturali", "Piazza Renato Cacciappoli", "Piazza De Rosa", "Piazza della Scienza e della Tecnica \"Giulio Natta\"", "Piazza Renato Maria Capocelli", "Piazza della Politica", "Piazza della Costituzione Italiana", "Piazza Pomponio Leto", "Piazza dell'Economia", "Piazza Primo Levi", "Piazza dell'Industria", "Piazza delle Costruzioni", "Piazza Mario Napoli", "Piazza della Società"];

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // const handleButtonClick = (text) => {
    //     // Qui puoi definire cosa succede quando un pulsante viene cliccato
    //     console.log(`Button clicked: ${text}`);
    //
    // };
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');


    const handleStartPointChange = (event, newValue) => {
        setStartPoint(newValue);

        // Altri logici se necessario
    }

    const handleEndPointChange = (event, newValue) => {
        setEndPoint(newValue);

        // Altri logici se necessario
    }
    const updateSuggestedNames = (inputValue) => {
        const filteredNames = [...myGeoNomi, ...piazzeNomi].filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));
        setSuggestedNames(filteredNames);
    };
    const updateSuggestedNamesEnd = (inputValue) => {
        const filteredNames = [...myGeoNomi, ...piazzeNomi].filter(name => name.toLowerCase().includes(inputValue.toLowerCase()));
        setSuggestedNamesEnd(filteredNames);
    };

    const handleSendClick = () => {
        // Verifica se entrambi i campi di testo sono compilati prima di inviare i dati
        if (startPoint && endPoint) {
            onSendClick({ startPoint, endPoint });
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
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}  >
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
                        Persistent drawer
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

                <List>
                    <ListItem disablePadding>
                        <ListItemButton style={{ flexDirection: 'column'}}>
                            <Autocomplete
                                freeSolo
                                options={options}
                                value={startPoint}
                                onChange={handleStartPointChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Start Point"
                                        variant="outlined"

                                    />
                                )}
                            />

                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton style={{ flexDirection: 'column' }}>
                            <Autocomplete
                                freeSolo
                                options={options}
                                value={endPoint}
                                onChange={handleEndPointChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="End Point"
                                        variant="outlined"
                                    />
                                )}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Button variant="contained" onClick={handleSendClick}>
                                Invia
                            </Button>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['Piazze', 'Bus', 'Edifici','Elimina'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => handleButtonClick(text)}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open} style={{display:"none" }}>
                <DrawerHeader />

            </Main>
        </Box>
    );
}