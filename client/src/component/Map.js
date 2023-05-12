import './styles/map.css';
import { GoogleMap, Marker } from '@react-google-maps/api';
import Data from './jsons/Markers.json';
import uuid from 'react-uuid';
import { DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const Map = ({ origin }) => { 

    const [markers, setMarkers] = useState(Data.markers);
    const [zoom, setZoom] = useState(4);
    const [directions, setDirections] = useState(null);
    

    window.addEventListener('resize', (e) => {
        if (window.innerWidth <= 560) { setZoom(3); }
        else { setZoom(4); }
    });

    useEffect(() => {  
        if (origin) {
                sessionStorage.removeItem('closest');  
                markers.forEach((marker, index) => {
                calcDist(marker, index);
            });  
        }
    }, [origin]);

    const calcDist = async (marker, index) => {
        const directionsService = new window.google.maps.DirectionsService();
       
        await directionsService.route(
            {
                destination: marker.address.toString(),
                origin: origin.toString(),
                travelMode: window.google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === 'OK' && result) {  

                    let distance = Number(result.routes[0].legs[0].distance.text.replace(" mi", "").replace(",", "")); 
                    let closest = JSON.parse(sessionStorage.getItem('closest'))

                    if (!closest || Number(closest.distance) > distance) {
                        sessionStorage.setItem('closest', JSON.stringify({result: result, distance: distance}));
                    }
                    if (markers.length === index + 1) { 
                        if (sessionStorage.getItem('closest')) {
                            setDirections(JSON.parse(sessionStorage.getItem('closest')).result);
                        }   
                    }
                }
            }
        )     
    }

    /*
        <DistanceMatrixService
            options={{
                destinations: ["4690 Convoy St Suite 102, San Diego, CA 92111"],
                origins: ["El Monte High School"],
                travelMode: "DRIVING",
            }}
            callback = {(response) => {console.log(response.rows[0].elements[0].distance.text)}}
        />
    */

    return (
        <div id="map">
            <GoogleMap 
                mapContainerClassName='google-map'
                zoom={zoom}
                center={{lat: 47.1164, lng: -101.2996}}
            >
                {origin && directions && sessionStorage.getItem('closest') && 
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