import './styles/search-results.css';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';
import { FaCarSide } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

import Data from './jsons/Markers.json';
import uuid from 'react-uuid';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaces, clearPlaces } from './actions/index.js';

const SearchResults = ({origin, selectStore}) => {
    
    const [defaultMarkers, setDefault] = useState(Data.markers);
    const [markers, setMarkers] = useState(null);
    const [render, setRender] = useState(false);

    const places = useSelector(state => state.places);
    const dispatch = useDispatch();

    useEffect(() => { 
        if (origin && !places.length) {
            defaultMarkers.forEach(async (marker, index) => {
                setTimeout(async () => {
                    await searchPlaces(marker, index);  
                }, 1000)
            }); 
        }

        if (render) {
            setMarkers(places);
            setTimeout(() => {
                dispatch(clearPlaces()); 
            }, 500)
            setRender(false);
        }

    }, [origin, defaultMarkers, render]);

    const searchPlaces = async (marker, index) => {

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
                    if (distance <= 500) {
                        dispatch(setPlaces({marker: marker, distance: distance}));
                    }
                    if (defaultMarkers.length === index + 1) { 
                        setRender(true);
                    }
                }
            }
        );  
    }

    return (
        <div className='search-results flex'>
            {markers && markers.length ?
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
                                <span>Open 10AM - 10PM </span>
                            </div>
                            <div className='search-footer grid'>
                                <div className='search-phone flex'>
                                    <FiPhoneCall/>
                                    <span>{marker.marker.phone}</span>
                                </div>
                                <div className='search-distance flex'>
                                    <FaCarSide className='car-icon'/>
                                    <span>{marker.distance} mi</span>
                                </div>
                                <button className='select-store flex' 
                                    onClick={() => {selectStore(marker.marker.address)}}
                                >Carryout</button>
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