import './styles/menu.css';
import Data from './jsons/Menu.json';
import MenuItem from './MenuItem.js';

import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

import { clearQuantity, clearCount } from './actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Menu = () => {

    const chicken_sandwiches = Data.chicken_sandwiches;
    const specials = Data.specials;
    const wings_combo = Data.wings_combo;
    const wings_by_piece = Data.wings_by_piece;
    const dips_and_flavors = Data.dips_and_flavors;
    const sides = Data.sides;
    const drinks = Data.drinks;

    const dispatch = useDispatch();

    const src = "https://res.cloudinary.com/dliw7yyw3/image/upload/v1682580788/Food/honey-barbecue-boneless-wings_osewm1.jpg";

    useEffect(() => {
        dispatch(clearQuantity());
        dispatch(clearCount());
    }, []);

    const viewMenu = (e) => {
        let prevDrop = document.querySelector('.drop');

        if (!e.currentTarget.id) { return; }
        if (prevDrop?.id !== e.currentTarget.id) {
            prevDrop?.classList.remove('drop')
        }

        let element = document.getElementById(e.currentTarget.id);
        element?.scrollIntoView({ block: 'center', inline: 'center'});
        element?.classList.toggle('drop');
    }

    return (
        <div className="menu flex">
            <div className='overlay'></div>
            <div className='special flex'>
                <h1>Specials</h1>
                <div className='flex'>
                    <img src={src} alt=""/>
                    <div>
                        <h1 className='special-label'>{specials[specials.length - 1].label}</h1>
                        <div className='special-content'>
                            {specials[specials.length - 1].content}
                        </div>
                        <Link
                            to={"/Menu/" + specials[specials.length - 1].label.replace(" ", "_").toLowerCase()}
                            state={{ item: specials[specials.length - 1], category: "specials" }}
                            key={uuid()}
                        >
                            <button className='special-button'>Order</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src='https://res.cloudinary.com/dliw7yyw3/image/upload/v1682011805/Food/istockphoto-585602290-612x612_zetzgm.jpg' alt=""/>
                <h1>Chicken Sandwiches</h1>
                <div className='menu-dropdown grid' >
                    {chicken_sandwiches &&
                        chicken_sandwiches.map(item => <MenuItem key={uuid()} item={item} category="chicken sandwiches"/>)
                    }
                </div>
            </div>
            
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682580788/Food/honey-barbecue-boneless-wings_osewm1.jpg" alt=""/>
                <h1>Specials</h1>
                <div className='menu-dropdown grid' >
                    {specials &&
                        specials.map(item => <MenuItem key={uuid()} item={item} category="specials"/>)
                    }
                </div>
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682583987/Food/DEL2022-648012_Traditional_Boneless_PepsiGlass_Silo_4000x3000_ujsthc.png" alt=""/>
                <h1>Wings Combo</h1>
                <div className='menu-dropdown grid' >
                    {wings_combo &&
                        wings_combo.map(item => <MenuItem key={uuid()} item={item} category="wings combo"/>)
                    }
                </div>
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682547285/Food/chicken-wings-take-out_weymea.jpg" alt=""/>
                <h1>Wings By Piece</h1>
                <div className='menu-dropdown grid' >
                    {wings_by_piece &&
                        wings_by_piece.map(item => <MenuItem key={uuid()} item={item} category="wings by piece"/>)
                    }
                </div>  
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}> 
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682582085/Food/yellow-mustard-on-white-background_xf8a01.jpg" alt=""/>
                <h1>Dips and Flavors</h1>
                <div className='menu-dropdown grid' >
                    {dips_and_flavors &&
                        dips_and_flavors.map(item => <MenuItem key={uuid()} item={item} category="dips and flavors"/>)
                    }
                </div>
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682583615/Food/425063_u8i34i.png" alt=""/>
                <h1>Sides</h1>
                <div className='menu-dropdown grid' >
                    {sides &&
                        sides.map(item => <MenuItem key={uuid()} item={item} category="sides"/>)
                    }
                </div>
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682582713/Food/intro-1672878791_yj8rge.webp" alt=""/>
                <h1>Drinks</h1> 
                <div className='menu-dropdown grid' >
                    {drinks &&
                        drinks.map(item => <MenuItem key={uuid()} item={item} category="drinks"/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;