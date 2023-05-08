import './styles/location.css';
import { FaCarSide } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { useState } from 'react';
import Map from './Map.js';
import PlacesAutocomplete from './Autocomplete.js';
import { useJsApiLoader } from '@react-google-maps/api';

const Location = () => {

    const [search, setSearch] = useState([]);
    const [selected, setSelected] = useState(null);
    const [libraries] = useState(['places']);

    const { isLoaded } =  useJsApiLoader({ googleMapsApiKey: process.env.REACT_APP_API_KEY, libraries });

    const toggleOrder = (e, option) => {
        document.querySelector('.active')?.classList.remove('active');
        document.querySelector('.' + option)?.classList.add('active');
    }
    
    return (
        <div className='location flex'>
            <div className='location-wrapper flex'>
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

                {isLoaded ?
                    <PlacesAutocomplete setSelected={setSelected}/>
                    :''
                }

                <div className='search-results flex'>
                    {!search.length ? 
                        <div className='search-empty search'>
                            Ex: 2 Embarcadero San Francisco, CA 94111
                        </div>
                        :''
                    }
                </div>
            </div>
            
            {isLoaded ?
                <Map/>
                :''
            }
        </div>
    )
}

export default Location;