import './styles/menu-bar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle, FaCarSide } from 'react-icons/fa';
import { MdFastfood, MdClose } from 'react-icons/md';
import { HiLocationMarker, HiOutlineShoppingBag } from 'react-icons/hi';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuBar = () => {

    const logo = "https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_960_720.png";

    const order = useSelector(state => state.order);

    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="menu-bar flex">
            <AiOutlineMenu className='menu-icon' onClick={() => { setDropdown(true)} }/>
            <Link to='/' className='logo-wrapper flex'><img src={logo} className='logo' alt=""/></Link>
            {sessionStorage.getItem('store') &&
                <div className='header-alt flex'>
                    <Link to="/Order_Page" className='order-bag flex'>
                        <HiOutlineShoppingBag className='bag-icon'/>
                        {order.length > 0 &&
                            <div className='order-count'>{order.length}</div>
                        }
                    </Link>
                    <div className='header-address menu-bar-address flex'>
                        <HiLocationMarker className='location-icon'/>
                        <span>{JSON.parse(sessionStorage.getItem('store'))}</span>
                    </div>
                </div>
            }
            
            {dropdown &&
                <div className='menu-bar-dropdown flex'>
                    <div className='dropdown-header flex'>
                        <FaUserCircle className='user-icon'/>
                        <span>Welcome</span>
                        <MdClose className='close-icon' onClick={() => { setDropdown(false)} }/>
                    </div>
                    
                    <div className='menu-bar-nav flex'>
                        <Link to='/Menu' className='menu-bar-li' onClick={() => { setDropdown(false)} }>Menu</Link>
                        <Link to='/Flavors' className='menu-bar-li' onClick={() => { setDropdown(false)} }>Flavors</Link>
                        <Link to='/About' className='menu-bar-li' onClick={() => { setDropdown(false)} }>Our Story</Link>
                        <Link to="/Locations" className='menu-bar-li' onClick={() => { setDropdown(false)} }>Locations</Link>
                    </div>
                    {!sessionStorage.getItem('store') &&
                        <div className='dropdown-footer flex'>
                            <Link to="/Locations" onClick={() => {setDropdown(false)}}>
                                <button className='dropdown-footer-button flex'>
                                    <MdFastfood className='fast-food-icon'/>
                                    <div className="flex">
                                        <span>Order</span> 
                                        <span>Carryout</span>
                                    </div>
                                </button>
                            </Link>
                            
                            <Link to="/Locations" onClick={() => {setDropdown(false)}}>
                                <button className='dropdown-footer-button flex'>
                                    <FaCarSide className='car-side-icon'/>
                                    <div className="flex">
                                        <span>Order</span> 
                                        <span>Delivery</span>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default MenuBar;