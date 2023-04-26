import './styles/header.css';
import { FaCarSide } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';

const Header = () => {

    const logo = "https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146_960_720.png";

    return (
        <header className="header">
            <div className='header-scroll flex'>
                <img className='logo-image' src={logo} alt=""/>
                <nav className="nav flex">
                    <div>Our Menu</div>
                    <div>About Our Food</div>
                </nav>
                <div className='order flex'>
                    <button className='carryout-button order-button flex'>
                        <span>Order Carryout</span>
                        <MdFastfood className='fast-food-icon'/>
                    </button>
                    <button className='delivery-button order-button flex'>
                        <span className>Order Delivery</span>
                        <FaCarSide className='car-side-icon'/>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;