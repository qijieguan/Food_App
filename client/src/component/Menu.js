import './styles/menu.css';
import uuid from 'react-uuid';

const Menu = () => {

    const viewMenu = (e) => {
        let prevDrop = document.querySelector('.drop');

        if (!e.currentTarget.id) { return; }
        if (prevDrop?.id !== e.currentTarget.id) {
            prevDrop?.classList.remove('drop')
        }

        let element = document.getElementById(e.currentTarget.id);
        element?.classList.toggle('drop');
    }

    return (
        <div className="menu flex">
            <div className='special flex'>
                <h1>Special</h1>
                <div className='flex'>
                    <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682583987/Food/DEL2022-648012_Traditional_Boneless_PepsiGlass_Silo_4000x3000_ujsthc.png" alt=""/>
                    <div>
                        <h1 className='special-label'>$12.99 Large 15 PC Wing Combo</h1>
                        <div className='special-content'>
                            15 boneless or classic (Bone-in) wings with 2 flavors of your choice, regular or garlic fries, 
                            small drink, and 1 dip
                        </div>
                        <button className='special-button'>Order</button>
                    </div>
                </div>
            </div>

            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src='https://res.cloudinary.com/dliw7yyw3/image/upload/v1682011805/Food/istockphoto-585602290-612x612_zetzgm.jpg' alt=""/>
                <h1>Chicken Sandwiches</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>Chicken Sandwich</h1>
                        <div>
                            1 crispy chicken sandwich with lettuce, tomato, and cheese and your choice of flavor and 1 dip
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>Chicken Sandwich Combo</h1>
                        <div>
                            1 crispy chicken sandwich with combo with small fry, soda, and your choice of flavor and 1 dip
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682580788/Food/honey-barbecue-boneless-wings_osewm1.jpg" alt=""/>
                <h1>Specials</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>10 Boneless Wings</h1>
                        <div>
                            10 PC Boneless Wings with 1 flavor of your choices, lemon pepper, buffalo, honey garlic, or honey BBQ and 1 dip
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>15 Boneless Wings</h1>
                        <div>
                            15 PC Boneless Wings with 1 flavor of your choices, lemon pepper, buffalo, honey garlic, or honey BBQ and 1 dip
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682583987/Food/DEL2022-648012_Traditional_Boneless_PepsiGlass_Silo_4000x3000_ujsthc.png" alt=""/>
                <h1>Wing Combos</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>$6.99 Small 8 PC Wing Combo</h1>
                        <div>
                            8 boneless or classic (bone-in) wings with 2 flavors of your choice, regular or garlic fries,  
                            small drink, and 1 dip.
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>$8.99 Medium 10 PC Wing Combo</h1>
                        <div>
                            10 boneless or classic (bone-in) wings with 2 flavors of your choice, regular or garlic fries, 
                            small drink, and 1 dip
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>$12.99 Large 15 PC Wing Combo</h1>
                        <div>
                            15 boneless or classic (Bone-in) wings with 2 flavors of your choice, regular or garlic fries, 
                            small drink, and 1 dip
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682547285/Food/chicken-wings-take-out_weymea.jpg" alt=""/>
                <h1>Wings By Piece</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>8 PC Flavored Wings</h1>
                        <div>
                            Freshly cooked 8 PC wings with 1 flavor of the choices, lemon pepper, buffalo, honey garlic, or honey BBQ
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>15 PC Flavored Wings</h1>
                        <div>
                            Freshly cooked 15 PC wings with 1 flavor of the choices, lemon pepper, buffalo, honey garlic, or honey BBQ
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}> 
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682582085/Food/yellow-mustard-on-white-background_xf8a01.jpg" alt=""/>
                <h1>Dips and Flavors</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>Buffalo Sauce</h1>
                        <div>
                            1 buffalo flavor sauce for your wings
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>Honey Garlic</h1>
                        <div>
                            1 honey garlic flavor sauce for your wings
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>Honey BBQ</h1>
                        <div>
                            1 honey BBQ flavor sauce for your wings
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682583615/Food/425063_u8i34i.png" alt=""/>
                <h1>Sides</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>Mashed Potatos and Gravy</h1>
                        <div>
                            Mashed potatos and gravy served in small, medium, or large portion
                        </div>
                        <button>Order</button>
                    </div>
                    <div className='menu-dropdown-li'>  
                        <h1>Mac and Cheese</h1>
                        <div>
                            Mac and Cheese served in small, medium, or large portion
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
            <div className="category grid" id={uuid()} onClick={(e) => viewMenu(e)}>
                <img src="https://res.cloudinary.com/dliw7yyw3/image/upload/v1682582713/Food/intro-1672878791_yj8rge.webp" alt=""/>
                <h1>Drinks</h1>
               
                <div className='menu-dropdown grid' >
                    <div className='menu-dropdown-li'>  
                        <h1>Soda</h1>
                        <div>
                            1 soda drink served in small, medium, or large cup
                        </div>
                        <button>Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;