import './styles/locations.css';
import { FaCarSide } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { MdFastfood } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

import { useState, useEffect } from 'react';

import Map from './Map.js';
import PlacesAutocomplete from './Autocomplete.js';
import SearchResults from './SearchResults.js';

import { useJsApiLoader } from '@react-google-maps/api';

import { useDispatch } from 'react-redux';
import { clearPlaces } from './actions/index.js';

const Locations = () => {

    const [libraries] = useState(['places']);
    const [origin, setOrigin] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(clearPlaces());
    }, [origin]);

    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: process.env.REACT_APP_API_KEY, libraries });

    const toggleOrder = (e, option) => {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelector('.' + option)?.classList.add('active');
    }

    const mapView = () => {
        document.querySelector('.locations-wrapper')?.classList.add('hide');
        document.querySelector('#map')?.classList.add('expand');
        document.querySelector('.locations-opener')?.classList.add('active');
    }

    const splitView = () => {
        document.querySelector('.locations-wrapper')?.classList.remove('hide');
        document.querySelector('#map')?.classList.remove('expand');
        document.querySelector('.locations-opener')?.classList.remove('active');
    }    

    const setSelected = (address) => {
        setOrigin(address);
    }

    const selectStore = (address) => {
        sessionStorage.setItem('store', JSON.stringify(address));
    }

    return (
        <div className='locations flex'>
            <div className='locations-opener flex' onClick={() => {splitView()}}>
                <HiLocationMarker className='locations-icon'/>
                <div className='flex'>
                    <span>Search</span>
                    <span>Locations</span> 
                </div>
            </div>
            <div className='locations-wrapper flex'>
                <div className='map-icon flex' onClick={() => {mapView()}}>
                    <BsArrowLeft/>
                    <span>Map View</span>
                </div>
                <h1>Get Started</h1>
                <div className='order-options flex'>
                    <div className='carryout active flex'
                        onClick={(e) => {toggleOrder(e, 'carryout')}}
                    >
                        <FaCarSide className='car-side-icon'/>
                        <span>Carryout</span>
                    </div>
                    <div className='delivery flex'
                        onClick={(e) => {toggleOrder(e, 'delivery')}}
                    >
                        <MdFastfood className='fast-food-icon'/>
                        <span>Delivery</span>
                    </div>
                </div>

                {isLoaded &&
                    <PlacesAutocomplete setSelected={setSelected}/>
                }

                {isLoaded &&
                    <SearchResults origin={origin} selectStore={selectStore}/>
                }
            </div>
            
            {isLoaded &&
                <Map origin={origin}/>
            }
        </div>
    )
}

export default Locations;