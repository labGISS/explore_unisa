// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import L from 'leaflet'; // Assicurati di avere la libreria Leaflet installata
//
// const LeafletMapComponent = () => {
//     useEffect(() => {
//         // Inizializzazione della mappa
//         const map = L.map('map', {
//             zoomControl: true, maxZoom: 28, minZoom: 1
//         }).fitBounds([[40.76754728937129, 14.779956399405092], [40.77687476848695, 14.803624093192749]]);
//
//         // ... Altri script e configurazioni necessari ...
//
//         // Rimuovi la mappa quando il componente viene smontato
//         return () => {
//             map.remove();
//         };
//     }, []); // L'array vuoto indica che questo effetto viene eseguito solo al mount del componente
//
//     return (
//         <Router>
//             {/* Definisci la tua mappa come una Route */}
//             <Route path="/mappa" render={() => (
//                 <>
//                     {/* Importa i fogli di stile e altri elementi necessari */}
//                     <link rel="stylesheet" href="components/leafletMap/css/leaflet.css" />
//                     <link rel="stylesheet" href="components/leafletMap/css/qgis2web.css" />
//                     <link rel="stylesheet" href="components/leafletMap/css/fontawesome-all.min.css" />
//
//                     {/* Stile specifico per il tuo componente */}
//                     <style>
//                         {`
//               #map {
//                   width: 1620px;
//                   height: 844px;
//               }
//             `}
//                     </style>
//
//                     {/* Il tuo HTML originale */}
//                     <div id="map"></div>
//                 </>
//             )} />
//         </Router>
//     );
// };
//
// export default LeafletMapComponent;
