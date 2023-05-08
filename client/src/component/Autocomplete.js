import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import "@reach/combobox/styles.css";
import './styles/autocomplete.css';
import { AiOutlineSearch } from 'react-icons/ai';

const PlacesAutocomplete = ( {setSelected} ) => {

    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions
    } 
    = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);

        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });

    }

    return (
        <div className='combobox flex'>
            <h1>Search Zip or City, State</h1>
            <Combobox onSelect={handleSelect} style={{ width: '100%'}}>
                <div className='combox-input-wrapper flex'>
                    <div className='search-icon flex'>
                        <AiOutlineSearch/>
                    </div>
                    <ComboboxInput 
                        className='combobox-input'
                        value={value} 
                        onChange={(e) => { setValue(e.target.value)}} 
                        disabled={!ready}
                    />
                </div>
                <ComboboxPopover className='combobox-popover'>
                    <ComboboxList>
                        {
                            data.map(({ place_id, description }) => 
                                <ComboboxOption key={place_id} value={description}/>
                            )
                        }
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default PlacesAutocomplete;