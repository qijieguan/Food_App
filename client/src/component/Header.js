import './styles/header.css';
import { FaCarSide } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MenuBar from './MenuBar.js';
import { useLocation } from "react-router";


const Header = () => {

    const logo = "https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_960_720.png";

    const [showBar, setShowBar] = useState(false);

    const location = useLocation();

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
                        <Link to='/Menu'>Our Menu</Link>
                        <Link to='/Flavors'>Flavors</Link>
                        <div>About Our Food</div>
                        <Link to='/Locations'>Locations</Link>
                    </nav>
                    <div className='order flex'>
                        <button className='carryout-button order-button flex'>
                            <MdFastfood className='fast-food-icon'/>
                            <div className='flex'>
                                <span>Order </span>
                                <span>Carryout</span>
                            </div>
                        </button>
                        <button className='delivery-button order-button flex'>
                            <FaCarSide className='car-side-icon'/>
                            <div className='flex'>
                                <span>Order </span>
                                <span>Delivery</span>
                            </div>
                        </button>
                    </div>
                </div>
                :
                <MenuBar/>
            }
            
        </header>
    )
}

export default Header;