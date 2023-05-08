import './styles/map.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Data from './jsons/Markers.json';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';

const Map = () => {

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        setMarkers(Data.markers);
    }, []);

    return (
        <div id="map">
            <GoogleMap 
                mapContainerClassName='google-map'
                zoom={4}
                center={{lat: 47.1164, lng: -101.2996}}
            >
                {markers && markers.length ?
                    markers.map(marker => 
                        <Marker key={uuid()} position={{lat: marker.latitude, lng: marker.longitude}}/>
                    )
                    :''
                }
            </GoogleMap>
        </div>
    )
}

export default Map;