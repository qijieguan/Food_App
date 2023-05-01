import './styles/flavors.css';
import Data from './jsons/Flavors.json';
import uuid from 'react-uuid';
import Flavor from './Flavor';

const Flavors = () => {

    const flavors = Data.flavors;

    return (
        <div className='flavors grid flex'>
            <div className='flavors-header flex'>
                <h1>Explore Your Flavors</h1>
                <span>Try different flavors for your clasic wings, classic wings, or cripsy tenders!</span>
            </div>
            
            {flavors.length ? 
                flavors.map(flavor => <Flavor key={uuid()} flavor={flavor}/> )
                :''
            }
        </div>
    )
}

export default Flavors;