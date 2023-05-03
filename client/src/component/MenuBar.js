import './styles/menu-bar.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { FaUserCircle, FaCarSide } from 'react-icons/fa';
import { MdFastfood, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';


const MenuBar = () => {

    const logo = "https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_960_720.png";

    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="menu-bar flex">
            <AiOutlineMenu className='menu-icon' onClick={() => { setDropdown(true)} }/>
            <Link to='/' className='logo-wrapper flex'><img src={logo} className='logo' alt=""/></Link>
            
            <div className='menu-bar-dropdown flex' style={{display: dropdown ? 'block' : 'none'}}>
                <div className='dropdown-header flex'>
                    <FaUserCircle className='user-icon'/>
                    <span>Welcome</span>
                    <MdClose className='close-icon' onClick={() => { setDropdown(false)} }/>
                </div>
                
                <div className='menu-bar-nav flex'>
                    <Link to='/Menu' className='menu-bar-li' onClick={() => { setDropdown(false)} }>Our Menu</Link>
                    <Link to='/Flavors' className='menu-bar-li' onClick={() => { setDropdown(false)} }>Flavors</Link>
                    <div className='menu-bar-li' onClick={() => { setDropdown(false)} }>About Our Food</div>
                    <div className='menu-bar-li' onClick={() => { setDropdown(false)} }>Locations</div>
                </div>

                <div className='dropdown-footer flex'>
                        <button className='flex'>
                            <MdFastfood className='fast-food-icon'/>
                            <div className="flex">
                                <span>Order</span> 
                                <span>Carryout</span>
                            </div>
                        </button>
                        <button className='flex'>
                            <FaCarSide className='car-side-icon'/>
                            <div className="flex">
                                <span>Order</span> 
                                <span>Delivery</span>
                            </div>
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default MenuBar;