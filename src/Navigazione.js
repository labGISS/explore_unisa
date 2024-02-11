import React, { useRef, useEffect, useState, useContext  } from "react";
import {GeoJSON, MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import { createControlComponent } from "@react-leaflet/core";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import gh from 'graphhopper-js-api-client';
import {Button, colors} from "@mui/material";
import SidebarNavigazione from'../src/components/sidebar/sidebarNavigazione.jsx'
import Navbar from'../src/components/navbar/navbar.jsx'
import SwipeableEdge from '../src/components/swipeableEdge/swipeableEdge'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PersistentDrawerLeft from "../src/components/sidebar/sidebarNavigazione.jsx";
import Dialog from "../src/components/dialog/Dialog.jsx";
import 'leaflet.icon.glyph';

function getNamesAndIds(geoJsonData) {
    const namesAndIds = [];
    geoJsonData.features.forEach((feature) => {
        const name = feature.properties.Nome;
        const id = feature.properties.id;
        const lat = feature.geometry.coordinates[0];
        const long = feature.geometry.coordinates[1];
        namesAndIds.push({ name, id, lat, long });
    });
    return namesAndIds.sort((a, b) => a.name.localeCompare(b.name));
}


var myGeo = {
    "type": "FeatureCollection",
    "name": "EdificiCentro",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 328, "Nome": "F3", "Tipologia": null, "Note": null, "Area": 1086 }, "geometry": { "type": "Point", "coordinates": [ 14.78919520612815929894, 40.77509008560196690496 ] } },
        { "type": "Feature", "properties": { "id": 190, "Nome": "H", "Tipologia": null, "Note": null, "Area": 613 }, "geometry": { "type": "Point", "coordinates": [ 14.78874825710092366648, 40.77577309706622799013 ] } },
        { "type": "Feature", "properties": { "id": 150, "Nome": "F2", "Tipologia": null, "Note": null, "Area": 2258 }, "geometry": { "type": "Point", "coordinates": [ 14.78969962861221176809, 40.77447251376911907528 ] } },
        { "type": "Feature", "properties": { "id": 387, "Nome": "F1", "Tipologia": null, "Note": null, "Area": 1603 }, "geometry": { "type": "Point", "coordinates": [ 14.78890751521025492821, 40.77360546040973332538 ] } },
        { "type": "Feature", "properties": { "id": 338, "Nome": "F1", "Tipologia": null, "Note": null, "Area": 1287 }, "geometry": { "type": "Point", "coordinates": [ 14.7901208857104915495, 40.77283974681102307613 ] } },
        { "type": "Feature", "properties": { "id": 242, "Nome": "Biblioteca Scientifica", "Tipologia": null, "Note": null, "Area": 1849 }, "geometry": { "type": "Point", "coordinates": [ 14.78876654289841674483, 40.77244761076013190859 ] } },
        { "type": "Feature", "properties": { "id": 145, "Nome": "Osservatorio dell'Appennino meridionale", "Tipologia": null, "Note": null, "Area": 263 }, "geometry": { "type": "Point", "coordinates": [ 14.78646805571764666354, 40.77377967380891021776 ] } },
        { "type": "Feature", "properties": { "id": 188, "Nome": "Osservatorio dell'Appennino Meridionale 2", "Tipologia": null, "Note": null, "Area": 265 }, "geometry": { "type": "Point", "coordinates": [ 14.78649198478192516859, 40.7735733051929969406 ] } },
        { "type": "Feature", "properties": { "id": 12, "Nome": "I1", "Tipologia": null, "Note": null, "Area": 999 }, "geometry": { "type": "Point", "coordinates": [ 14.7869456428769208145, 40.77624990970723928285 ] } },
        { "type": "Feature", "properties": { "id": 146, "Nome": "E2", "Tipologia": null, "Note": null, "Area": 1097 }, "geometry": { "type": "Point", "coordinates": [ 14.79157476053391562232, 40.7721537179010411478 ] } },
        { "type": "Feature", "properties": { "id": 158, "Nome": "D3", "Tipologia": null, "Note": null, "Area": 1557 }, "geometry": { "type": "Point", "coordinates": [ 14.7907602235147130898, 40.77164374552936010332 ] } },
        { "type": "Feature", "properties": { "id": 309, "Nome": "D2", "Tipologia": null, "Note": null, "Area": 1533 }, "geometry": { "type": "Point", "coordinates": [ 14.79136080665239916243, 40.77101082349663130344 ] } },
        { "type": "Feature", "properties": { "id": 197, "Nome": "B2", "Tipologia": null, "Note": null, "Area": 1817 }, "geometry": { "type": "Point", "coordinates": [ 14.79260730939385126703, 40.77005927300695731219 ] } },
        { "type": "Feature", "properties": { "id": 265, "Nome": "A1", "Tipologia": null, "Note": null, "Area": 4138 }, "geometry": { "type": "Point", "coordinates": [ 14.79189096575815476342, 40.76875903433099068707 ] } },
        { "type": "Feature", "properties": { "id": 307, "Nome": "B1", "Tipologia": null, "Note": null, "Area": 1620 }, "geometry": { "type": "Point", "coordinates": [ 14.79329604747695192657, 40.7695132021273849432 ] } },
        { "type": "Feature", "properties": { "id": 279, "Nome": "A2", "Tipologia": null, "Note": null, "Area": 1791 }, "geometry": { "type": "Point", "coordinates": [ 14.79229220089155205642, 40.76954622263418315242 ] } },
        { "type": "Feature", "properties": { "id": 161, "Nome": "C1", "Tipologia": null, "Note": null, "Area": 1158 }, "geometry": { "type": "Point", "coordinates": [ 14.7936086342154009543, 40.77069901882289570949 ] } },
        { "type": "Feature", "properties": { "id": 148, "Nome": "C2", "Tipologia": null, "Note": null, "Area": 1318 }, "geometry": { "type": "Point", "coordinates": [ 14.79293165134683185613, 40.77165623319163501037 ] } },
        { "type": "Feature", "properties": { "id": 92, "Nome": "D1", "Tipologia": null, "Note": null, "Area": 1091 }, "geometry": { "type": "Point", "coordinates": [ 14.79215827971450103462, 40.77135643353795302346 ] } },
        { "type": "Feature", "properties": { "id": 361, "Nome": "Piscina", "Tipologia": null, "Note": null, "Area": 2126 }, "geometry": { "type": "Point", "coordinates": [ 14.7872919852244724126, 40.77213636621379322378 ] } },
        { "type": "Feature", "properties": { "id": 397, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 1498 }, "geometry": { "type": "Point", "coordinates": [ 14.79010553660393689768, 40.77066369993937655636 ] } },
        { "type": "Feature", "properties": { "id": 159, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 817 }, "geometry": { "type": "Point", "coordinates": [ 14.78972178577400597987, 40.7703632319220830027 ] } },
        { "type": "Feature", "properties": { "id": 385, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 437 }, "geometry": { "type": "Point", "coordinates": [ 14.78916028170710283973, 40.77019205368524978894 ] } },
        { "type": "Feature", "properties": { "id": 162, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 924 }, "geometry": { "type": "Point", "coordinates": [ 14.78886815516736241705, 40.77056682280723975964 ] } },
        { "type": "Feature", "properties": { "id": 68, "Nome": "Laboratorio", "Tipologia": null, "Note": null, "Area": 408 }, "geometry": { "type": "Point", "coordinates": [ 14.78944370571609745468, 40.77074794310669858532 ] } },
        { "type": "Feature", "properties": { "id": 16, "Nome": "Mensa", "Tipologia": null, "Note": null, "Area": 5726 }, "geometry": { "type": "Point", "coordinates": [ 14.7938270771659681202, 40.77293013531794940718 ] } },
        { "type": "Feature", "properties": { "id": 104, "Nome": "Chiostro della pace", "Tipologia": null, "Note": null, "Area": 796 }, "geometry": { "type": "Point", "coordinates": [ 14.79263629944599678367, 40.76909044696130735019 ] } },
        { "type": "Feature", "properties": { "id": 82, "Nome": "D", "Tipologia": null, "Note": null, "Area": 3415 }, "geometry": { "type": "Point", "coordinates": [ 14.79142567162697297078, 40.77157402593236668054 ] } },
        { "type": "Feature", "properties": { "id": 56, "Nome": "Edisu", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79427646477684277215, 40.77061448940684584841 ] } },
        { "type": "Feature", "properties": { "id": 114, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79533514614199418702, 40.77059811912628362052 ] } },
        { "type": "Feature", "properties": { "id": 78, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79527639377734082871, 40.77110725445705696757 ] } },
        { "type": "Feature", "properties": { "id": 351, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.7953556401479531246, 40.77159828410427167 ] } },
        { "type": "Feature", "properties": { "id": 157, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79511745068348105292, 40.77183131679232985789 ] } },
        { "type": "Feature", "properties": { "id": 83, "Nome": "Presidio Sanitario e Poste", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78956586730313027545, 40.76912768686313626176 ] } },
        { "type": "Feature", "properties": { "id": 380, "Nome": "Unicredit Bank", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78954727985188277728, 40.76933221887708214126 ] } },
        { "type": "Feature", "properties": { "id": 353, "Nome": "F", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78890116417643518787, 40.7745262417276634892 ] } },
        { "type": "Feature", "properties": { "id": 268, "Nome": "E", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79070310936883636543, 40.77292152051754925424 ] } },
        { "type": "Feature", "properties": { "id": 273, "Nome": "C", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79267097429085708882, 40.77137010629990498956 ] } },
        { "type": "Feature", "properties": { "id": 196, "Nome": "B", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79335043166127583447, 40.77008352182066630576 ] } },
        { "type": "Feature", "properties": { "id": 352, "Nome": "Residenze", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79476163087396045626, 40.77222284621259973392 ] } },
        { "type": "Feature", "properties": { "id": 395, "Nome": "Laboratorio Modelli", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.78997884209623236984, 40.77307006712704406937 ] } },
        { "type": "Feature", "properties": { "id": 278, "Nome": "Masseria", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79093995342591405517, 40.77477013848975673227 ] } },
        { "type": "Feature", "properties": { "id": 195, "Nome": "Masseria", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.79078806541130752805, 40.7746917181850321299 ] } },
        { "type": "Feature", "properties": { "id": 266, "Nome": "Bibllioteca umanistica", "Tipologia": null, "Note": null, "Area": null }, "geometry": { "type": "Point", "coordinates": [ 14.7909291629075294594, 40.76906249111235069904 ] } }
    ]
}

var piazze = {
    "type": "FeatureCollection",
    "name": "CentroidiPiazza",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": 130, "Nome": "Piazza del Sapere", "Area": 6470, "Attrazioni": "Meridiana del Campus, Fontana" }, "geometry": { "type": "Point", "coordinates": [ 14.792113477307222, 40.770499824299357 ] } },
        { "type": "Feature", "properties": { "id": 336, "Nome": "Piazza delle Scienze Matematiche Fisiche e Naturali", "Area": 1644, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.789314685135787, 40.774773568111691 ] } },
        { "type": "Feature", "properties": { "id": 54, "Nome": "Piazza Renato Cacciappoli", "Area": 354, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.789658834667799, 40.774803080145432 ] } },
        { "type": "Feature", "properties": { "id": 228, "Nome": "Piazza De Rosa", "Area": 3424, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.791667943302805, 40.769340019007203 ] } },
        { "type": "Feature", "properties": { "id": 124, "Nome": "Piazza della Scienza e della Tecnica \"Giulio Natta\"", "Area": 2802, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.789811174379928, 40.773338807060718 ] } },
        { "type": "Feature", "properties": { "id": 47, "Nome": "Piazza Renato Maria Capocelli", "Area": 916, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.788842764625137, 40.775155416585498 ] } },
        { "type": "Feature", "properties": { "id": 165, "Nome": "Piazza della Politica", "Area": 297, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.792054601720535, 40.771019174411094 ] } },
        { "type": "Feature", "properties": { "id": 108, "Nome": "Piazza della Costituzione Italiana", "Area": 550, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.792928573731425, 40.769858655609418 ] } },
        { "type": "Feature", "properties": { "id": 334, "Nome": "Piazza Pomponio Leto", "Area": 473, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.791688684602619, 40.771608257454723 ] } },
        { "type": "Feature", "properties": { "id": 185, "Nome": "Piazza dell'Economia", "Area": 236, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.792994436209096, 40.771326917637566 ] } },
        { "type": "Feature", "properties": { "id": 329, "Nome": "Piazza Primo Levi", "Area": 535, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.789117116833502, 40.772567960107253 ] } },
        { "type": "Feature", "properties": { "id": 291, "Nome": "Piazza dell'Industria", "Area": 448, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.789630742329241, 40.772690922796563 ] } },
        { "type": "Feature", "properties": { "id": 53, "Nome": "Piazza delle Costruzioni", "Area": 305, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.79105860156494, 40.772887137832313 ] } },
        { "type": "Feature", "properties": { "id": 353, "Nome": "Piazza Mario Napoli", "Area": 492, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.792441037133319, 40.772218197325856 ] } },
        { "type": "Feature", "properties": { "id": 46, "Nome": "Piazza della Società", "Area": 523, "Attrazioni": null }, "geometry": { "type": "Point", "coordinates": [ 14.793348005675554, 40.770956077399994 ] } }
    ]
}

var bus = {
    "type": "FeatureCollection",
    "name": "busUnisa",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.793393186993432, 40.773411938932298 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.793299182992158, 40.773742835407283 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.793530711365666, 40.773848300072906 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.794250538301348, 40.771371813705905 ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "Point", "coordinates": [ 14.792977132247062, 40.767112067603705 ] } }
    ]
}

var strade = {
    "type": "FeatureCollection",
    "name": "percorsoPiedi",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 14.791249047114448, 40.770745200075019 ], [ 14.790057169223713, 40.772339528334101 ] ] ] } },
        { "type": "Feature", "properties": { "id": null }, "geometry": { "type": "MultiLineString", "coordinates": [ [ [ 14.791249627386058, 40.770740366055762 ], [ 14.791493341463037, 40.770842319842117 ], [ 14.791463167339222, 40.77088450757001 ], [ 14.791672065119485, 40.770975914221914 ], [ 14.791600111439616, 40.771072594197683 ], [ 14.791618680131197, 40.771081383279416 ], [ 14.791795082701199, 40.770842319842117 ], [ 14.79206664981554, 40.77095306257074 ], [ 14.791880962899748, 40.771188609982907 ], [ 14.791535121019091, 40.771701889511142 ], [ 14.791690633811067, 40.771761654677952 ] ] ] } }
    ]
}



let count = 0;
var listaEdifici = getNamesAndIds(myGeo);
var listaPiazze = getNamesAndIds(piazze);
console.log(listaPiazze);

function Navigazione(){
    let piazzeLayerRef = useRef(null);
    const mapRef = useRef(null);
    const latitude = 40.764753;
    const longitude = 14.792275;
    const position = [40.764753, 14.792275]
    const [markers, setMarkers] = useState([40.764753, 14.792275]);

    const [route, setRoute] = useState([]);
    const localizeClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude:", position.coords.latitude);
                    console.log("Longitude:", position.coords.longitude);
                    const map = mapRef.current;
                    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
                    map.flyTo([position.coords.latitude, position.coords.longitude]);


                },
                (error) => {
                    console.error("Error getting geolocation:", error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };
    let dentro=false;
    let busLayer;
    var flag = 0;

    const [instructions, setInstructions] = useState(""); // Definisci lo state instructions

    const handleWaypoints = (mar1,mar2) => {
        const lat1 = mar1.lat.toFixed(6);  // Limita a 6 decimali
        const lng1 = mar1.lng.toFixed(6);
        const lat2 = mar2.lat.toFixed(6);
        const lng2 = mar2.lng.toFixed(6);

        const apiKey = '5b3ce3597851110001cf6248280102de693842a9afa75ce9c91c78df';
        const url = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=5b3ce3597851110001cf6248280102de693842a9afa75ce9c91c78df&start=${lng1},${lat1}&end=${lng2},${lat2}&language=it`;
        console.log("STAMPA",lat1,lng1,lat2,lng2);
        //crea qua il secondo punto e invia la richiesta
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('Data from API:', data);
                const coordinates = data.features[0].geometry.coordinates;
                //instructions = data.features[0].properties.segments[0].steps;
                setInstructions(data.features[0].properties.segments[0].steps)
                console.log('Istruction :', instructions);
                const routeCoordinates = coordinates.map((coord) => [coord[1], coord[0]]);
                // flag = 1
                // Rimuovi il percorso esistente, se presente
                if (mapRef.current) {
                    const map = mapRef.current;

                    map.eachLayer(layer => {
                        console.log(layer);
                        if (layer instanceof L.Polyline) {
                            console.log("LAYERR",layer);
                            map.removeLayer(layer);

                            map.eachLayer(layer => {
                                if(layer instanceof  L.Marker && !dentro){

                                    setMarkerArray((prevArray) => {

                                        const newPositions = prevArray.slice(1);
                                        markerArray[0].remove();
                                        return newPositions;
                                    });

                                    dentro=true;
                                }
                            });
                            dentro=false;
                        }

                    });

                    L.polyline(routeCoordinates, { color: 'blue' }).addTo(map);
                    L.setOptions({language: 'it'})


                }

                setRoute(routeCoordinates);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const deleteWaypoints = () => {

        if (mapRef.current) {
            const map = mapRef.current;
            map.eachLayer(layer => {
                if (layer instanceof L.Polyline) {
                    layer.remove();

                }
                // if (layer instanceof L.Marker && layer !== piazzeLayerRef.current) {
                //     layer.remove();
                //     count = 0;
                // }
                console.log("PIAZZE LAYER",piazzeLayerRef.current)
                if (layer instanceof L.Marker) {
                    layer.remove();
                    count = 0;

                }

            });


        }

        setMarkerArray([]);
        setMarkerPositions([]);
    };
    // Dichiarazione di uno stato per tenere traccia del primo marker
    const [markerArray, setMarkerArray] = useState([]);
    const [markerPositions, setMarkerPositions] = useState([]);

    useEffect(() => {
        if (count === 2) {
            // Ora markerPositions è stato aggiornato
            const firstTwoMarkers = markerPositions.slice(0, 2);
            console.log('Coordinate dei primi due marker:', firstTwoMarkers[0], firstTwoMarkers[1]);
            handleWaypoints(firstTwoMarkers[0], firstTwoMarkers[1]);
            // Rimuovi il primo elemento dall'array markerPositions
            setMarkerPositions((prevPositions) => {
                const newPositions = prevPositions.slice(1);  // Utilizzare slice per ottenere una porzione escludendo il primo elemento
                return newPositions;
            });


            console.log(' MARKER DOPO:', markerArray);

            count=1;
        }

    }, [count, markerPositions]);
    const handleMapClick = (e) => {
        if (count < 2) {
            if (mapRef.current) {
                const map = mapRef.current;
                const marker = L.marker(e.latlng)
                marker.addTo(map);
                setMarkerPositions((prevPositions) => [...prevPositions, e.latlng]);
                setMarkerArray((prevArray) => [...prevArray, marker]);
                count++;
            }
            console.log(' MARKER:', markerArray);

        }

    };
    const [showBusLayer, setShowBusLayer] = useState(false);
    const [showGeoJSONLayer1, setShowGeoJSONLayer1] = useState(false);
    const [showGeoJSONLayer2, setShowGeoJSONLayer2] = useState(false);
    const [showGeoJSONLayer3, setShowGeoJSONLayer3] = useState(false);

    const handleCheckboxChange1 = () => {
        setShowGeoJSONLayer1(!showGeoJSONLayer1);
    };
    const handleCheckboxChange2 = () => {
        setShowGeoJSONLayer2(!showGeoJSONLayer2);
    };
    const handleBusButtonClick = () => {
        // Gestisci la logica per mostrare/nascondere il layer del bus
        setShowGeoJSONLayer2(!showGeoJSONLayer2);
    };
    const [selectedValue, setSelectedValue] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value)
    };
    const handleCheckboxChange3 = () => {
        setShowGeoJSONLayer3(!showGeoJSONLayer3);
    };
    useEffect(() => {
        // Esempio: Aggiornare il layer GeoJSON quando showGeoJSONLayer1 cambia
        if (piazzeLayerRef.current) {
            const map = mapRef.current;
            if (showGeoJSONLayer1) {
                piazzeLayerRef.current.addTo(map);
            } else {
                map.removeLayer(piazzeLayerRef.current);
            }
        }
    }, [showGeoJSONLayer1]);

    const handleButtonClick = (text) => {
        console.log(`Button clicked: ${text}`);
        // Aggiungi la logica specifica per attivare il layer del bus qui
        if (text === 'Bus') {
            handleBusButtonClick();
        } if (text === 'Piazze') {
            handleCheckboxChange1();
        } if (text === 'Edifici') {
            handleCheckboxChange3();
        }if (text === 'Elimina') {
            deleteWaypoints();
        }
        // Aggiungi altri controlli se necessario
    };
    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            const popupContent = `<p>${feature.properties.Nome}</p>`; // Sostituisci con le tue proprietà

            layer.bindPopup(popupContent);
        }
    };
    return (
        <div style={{ height: '100vh', width: '100%'}} className="SimpleMap">
            <SidebarNavigazione/>
            <div style={{ height: 'calc(100vh - 64px)', width: '100%', marginTop:'64px'}}>
                <PersistentDrawerLeft handleButtonClick={handleButtonClick}/>
                <MapContainer center={[latitude, longitude]}
                              zoom={20} ref={mapRef} style={{height: 'calc(100vh - 64px)', width: "100vw"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {showGeoJSONLayer1 && <GeoJSON data={piazze} ref={piazzeLayerRef}   pointToLayer={(feature, latlng) => {
                        return L.circleMarker(latlng, {
                            fillColor: 'yellow', // Cambia il colore di riempimento
                            color: 'white',   // Cambia il colore del bordo
                            radius: 10,        // Cambia la dimensione del marker
                            weight: 2,         // Cambia la larghezza del bordo
                            opacity: 1,        // Cambia l'opacità
                            fillOpacity: 0.7   // Cambia l'opacità del riempimento
                        });
                    }} onEachFeature={onEachFeature}
                    />}
                    {showGeoJSONLayer2 && <GeoJSON key="bus-layer" data={bus}   pointToLayer={(feature, latlng) => {
                        return L.circleMarker(latlng, {
                            fillColor: 'red', // Cambia il colore di riempimento
                            color: 'white',   // Cambia il colore del bordo
                            radius: 10,        // Cambia la dimensione del marker
                            weight: 2,         // Cambia la larghezza del bordo
                            opacity: 1,        // Cambia l'opacità
                            fillOpacity: 0.7   // Cambia l'opacità del riempimento
                        });
                    }} onEachFeature={onEachFeature}
                    />}
                    {showGeoJSONLayer3 && <GeoJSON data={myGeo}  pointToLayer={(feature, latlng) => {
                        return L.circleMarker(latlng, {
                            fillColor: 'red', // Cambia il colore di riempimento
                            color: 'white',   // Cambia il colore del bordo
                            radius: 10,        // Cambia la dimensione del marker
                            weight: 2,         // Cambia la larghezza del bordo
                            opacity: 1,        // Cambia l'opacità
                            fillOpacity: 0.7   // Cambia l'opacità del riempimento
                        });
                    }} onEachFeature={onEachFeature}
                    />}
                    <Marker position={position}></Marker>
                    <MapEventsHandler handleMapClick={handleMapClick} />
                </MapContainer>
            </div>

            <div>

                {/*<SwipeableEdge istruzioni={instructions}></SwipeableEdge>*/}
            </div>

        </div>

    );


}
const MapEventsHandler = ({ handleMapClick }) => {
    useMapEvents({
        click: (e) => handleMapClick(e),
    });
    return null;
};
export default Navigazione;
