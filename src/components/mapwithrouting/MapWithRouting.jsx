import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '500px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[markerLat, markerLng]}>
                <Popup>
                    A popup message on the marker.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;