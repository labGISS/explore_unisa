import React, { useState, useEffect } from 'react';

const App = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        const getUserLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, (error) => {
                console.log(error.message);
            });
        };
        getUserLocation();
    }, []);

    return (
        <div>
            <h1>Le tue coordinate</h1>
            <p>Latitudine: {latitude}</p>
            <p>Longitudine: {longitude}</p>
        </div>
    );
};

export default App;
