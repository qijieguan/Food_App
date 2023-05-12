import './styles/search-results.css';
import Data from './jsons/Markers.json';
import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';
import { FaCarSide } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

const SearchResults = ({origin}) => {

    
    const [defaultMarkers, setDefault] = useState(Data.markers);
    const [markers, setMarkers] = useState([]);


    useEffect(() => {
        
        if (origin) { 
            sessionStorage.removeItem('nearby');  
            defaultMarkers.forEach(async (marker, index) => {
                await nearbyMarkers(marker, index);
            }); 
        }
       
    }, [origin, defaultMarkers]);

    const nearbyMarkers = async (marker, index) => {

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
                    if (distance <= 1000) {
                        if (!sessionStorage.getItem('nearby')) {
                            sessionStorage.setItem('nearby', JSON.stringify({markers: [{marker: marker, distance: distance}]}));
                        }
                        else {
                            let nearby = JSON.parse(sessionStorage.getItem('nearby')).markers;
                            sessionStorage.setItem('nearby', JSON.stringify({markers: [...nearby, {marker: marker, distance: distance}]}))
                        }
                    }
                    if (defaultMarkers.length === index + 1) { 
                        if (sessionStorage.getItem('nearby')) {
                            let nearby = JSON.parse(sessionStorage.getItem('nearby')).markers;
                            setMarkers(nearby);
                        }   
                    }
                }
            }
        );  
    }

    return (
        <div className='search-results flex'>
            {markers.length ?
                <div className='search-list flex'>
                    { markers.map(marker => 
                        <div className='search flex' key={uuid()}>
                            <h1 className='search-name'>{marker.marker.name}</h1>
                            <div className='search-address flex'>
                                <TfiLocationPin className='location-icon'/>
                                <span>{marker.marker.address}</span>
                            </div>
                            <div className='search-hours flex'> 
                                <BiTimeFive className='hours-icon'/>
                                <span>10AM - 10PM </span>
                            </div>
                            <div className='search-footer flex'>
                                <div className='search-phone flex'>
                                    <FiPhoneCall/>
                                    <span>{marker.marker.phone}</span>
                                </div>
                                <div className='search-distance flex'>
                                    <FaCarSide className='car-icon'/>
                                    <span>{marker.distance} mi</span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                :
                <div className='search-empty'>
                    Ex: 2 Embarcadero San Francisco, CA 94111
                </div>
            }
        </div>
    )
}

export default SearchResults;