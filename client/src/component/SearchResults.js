import './styles/search-results.css';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiLocationPin } from 'react-icons/tfi';
import { FaCarSide } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Data from './jsons/Markers.json';
import uuid from 'react-uuid';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaces, clearPlaces } from './actions/index.js';

import { useNavigate } from "react-router-dom";

import Modal from 'react-modal';

const SearchResults = ({origin, selectStore}) => {
    
    const [defaultMarkers, setDefault] = useState(Data.markers);
    const [markers, setMarkers] = useState(null);
    const [render, setRender] = useState(false);
    const [carryout, setCarryout] = useState(null);
    const [modal, setModal] = useState(false);

    const places = useSelector(state => state.places);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const modalStyles = {
        content : {
            display: 'flex',
            flexDirection: 'column',
            top : '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            textAlign: 'center',
            width: 'max(15rem, 50%)',
            height: '50%',
            transform: 'translate(-50%, -50%)', 
            color: 'gray',
            backgroundColor: 'rgb(30,30,30)',
            border: '1px solid black',
            zIndex: '5px',
            overflowY: 'auto'
        },
        overlay: { backgroundColor: 'rgb(0, 0, 0, 0.7)', zIndex: '4' }
    };

    Modal.setAppElement(document.getElementById('root'));

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
                                    onClick={() => {
                                        selectStore(marker.marker.address);
                                        setCarryout({location: marker.marker.name, address: marker.marker.address});
                                        setModal(true);
                                    }}
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

            <Modal isOpen={modal} style={modalStyles}>
                <div className='carryout-modal'>
                    <div className='carryout-close' onClick={() => {setModal(false)}}><AiOutlineCloseCircle/></div>
                    <h1 className='carryout-label'>Confirm Store Location</h1>
                    {carryout &&
                        <div className='carryout-detail'>
                            <h1 className='carryout-location'>{carryout.location}</h1>
                            <h1 className='carryout-address'>{carryout.address}</h1>
                        </div>
                    }
                    <div className='carryout-buttons flex'>
                        <button className='change-button' onClick={() => {setModal(false)}}>Change Location</button>
                        <button className='confirm-button' 
                            onClick={() => {setModal(false); selectStore(carryout.address); navigate('/Menu'); }}
                        >Confirm</button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default SearchResults;