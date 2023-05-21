import './styles/customization.css';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

import FlavorSlider from './FlavorSlider.js';
import Dip from './DipSlider.js';

import Flavors from './jsons/Flavors.json';
import Dips from './jsons/Dips.json';

import uuid from 'react-uuid';

const Customization = ({ item }) => {

    const flavors = Flavors.flavors;
    const dips = Dips.dips;

    const selectTab = (e) => {
        e.currentTarget?.classList.toggle('dropdown');
    };

    return (
        <div className="customization">

            <div className='label-tab flex'>
                <div className='label-header flex'>
                    <span>{item.label}</span>
                    <AiOutlineDown className='down-icon'/>
                </div>
                
                <div className='label-content flex'>
                    <div className='label-name'>{item.label}</div>
                    <div className='label-price'>${item.price.toFixed(2)}</div>
                    <div className='label-calories'>calories: {item.calories}</div>
                </div>
            </div>
            
            <div className='flavor-tab'>
                <div className='flavor-header custom flex' onClick={(e) => {selectTab(e)}}>
                    <span>Flavors</span>
                    <AiOutlineDown className='down-icon'/>
                    <AiOutlineUp className='up-icon'/>
                </div>

                <div className='flavor-content flex'>
                    {Object.hasOwn(item, 'flavor') ?
                        flavors.map(flavor => 
                            <FlavorSlider key={uuid()} max={item.pieces} choice={item.flavor} flavor={flavor}/>
                        )
                        :
                        <h1 className='flavor-empty'>This product does not include flavors.</h1>
                    }
                </div>
            </div>
            
        
            <div className='dip-tab'>
                <div className='dip-header custom flex' onClick={(e) => {selectTab(e)}}>
                    <span>Dips</span>
                    <AiOutlineDown className='down-icon'/>
                    <AiOutlineUp className='up-icon'/>
                </div>

                <div className='dip-content flex'>
                    {Object.hasOwn(item, 'dip') ?
                        dips.map(dip => <Dip key={uuid()} max={item.dip} choice={item.dip} dip={dip}/>)
                        :
                        <h1 className='dip-empty'>This product does not include dips.</h1>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Customization
