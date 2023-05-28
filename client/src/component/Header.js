import './styles/header.css';
import { FaCarSide } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { HiLocationMarker, HiOutlineShoppingBag } from 'react-icons/hi';

import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import MenuBar from './MenuBar.js';

const Header = () => {

    const logo = "https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_960_720.png";
    
    const location = useLocation();
    const order = useSelector(state => state.order);

    const [showBar, setShowBar] = useState(false);

    useEffect(() => {

        window.scrollTo(0, 0);
        
        resizeCheck();

        window.addEventListener('resize', (e) => {
            resizeCheck();
        });
    }, [location]);

    const resizeCheck = () => {
        if (window.innerWidth <= 1200) {
            setShowBar(true);
        }
        else {
            setShowBar(false);
        }
    };

    return (
        <header className="header">

            {!showBar ?
                <div className='header-scroll flex'>
                    <Link to='/' className='logo flex'><img className='logo-image' src={logo} alt=""/></Link>
                    <nav className="nav flex">
                        <Link to='/Menu'>Menu</Link>
                        <Link to='/Flavors'>Flavors</Link>
                        <Link to='/About'>Our Story</Link>
                        <Link to='/Locations'>Locations</Link>
                    </nav>
                    {!sessionStorage.getItem('store') ?
                        <div className='order flex'>
                            <Link to='/Locations'>
                                <button className='carryout-button order-button flex'>
                                    <MdFastfood className='fast-food-icon'/>
                                    <div className='order-button-text flex'>
                                        <span>Order </span>
                                        <span>Carryout</span>
                                    </div>
                                </button>
                            </Link>
                            <Link to="/Locations">
                                <button className='delivery-button order-button flex'>
                                    <FaCarSide className='car-side-icon'/>
                                        <div className='order-button-text flex'>
                                            <span>Order </span>
                                            <span>Delivery</span>
                                        </div>
                                </button>
                            </Link>
                        </div>
                        :
                        <div className='header-alt flex'>
                            <Link to="/Order_Page" className='order-bag flex'>
                                <HiOutlineShoppingBag className='bag-icon'/>
                                {order.length > 0 &&
                                    <div className='order-count'>{order.length}</div>
                                }
                            </Link>
                            <div className='header-address'>
                                <HiLocationMarker className="location-icon" size={25}/>
                                <span>{JSON.parse(sessionStorage.getItem('store'))}</span>
                            </div>
                        </div>
                    }
                </div>
                :
                <MenuBar/>
            }
            
        </header>
    )
}

export default Header;