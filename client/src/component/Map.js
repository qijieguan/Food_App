import './styles/map.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Data from './jsons/Markers.json';
import uuid from 'react-uuid';
import { DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

const Map = ({ origin }) => { 

    const [markers, setMarkers] = useState(Data.markers);
    const [zoom, setZoom] = useState(4);
    const [directions, setDirections] = useState(null);
    
    const places = useSelector(state => state.places);

    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 560) { setZoom(3); }
        else { setZoom(4); }
    });

    useEffect(() => {  
        if (origin && places.length) {
            let result = null;
            places.forEach(place => {
                if (!result || place.distance < result.distance) {
                    result = place;
                    setTimeout(() => {
                        renderDirection(result.marker);
                    }, 2000)
                }
            });
        }
    }, [origin, places]);

    const renderDirection = async (marker) => {
        const directionsService = new window.google.maps.DirectionsService();
       
        await directionsService.route(
            {
                destination: marker.address.toString(),
                origin: origin.toString(),
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === 'OK' && result) {  
                    setDirections(result);
                }
            }
        )     
    }

    return (
        <div id="map">
            <GoogleMap 
                mapContainerClassName='google-map'
                zoom={zoom}
                center={{lat: 47.1164, lng: -101.2996}}
            >
                {directions &&
                    <DirectionsRenderer directions={directions}/>
                }
                {markers && markers.length &&
                    markers.map(marker => 
                        <Marker className="marker" key={uuid()} position={{lat: marker.latitude, lng: marker.longitude}}>
                            
                        </Marker>
                    )
                }
                <div className='map-overlay'/>
            </GoogleMap>
        </div>
    )
}

export default Map;