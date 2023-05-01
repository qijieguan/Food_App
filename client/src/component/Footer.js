import './styles/footer.css';
import { FiPhoneCall } from 'react-icons/fi';
import { TfiEmail, TfiLocationPin } from 'react-icons/tfi';

const Footer= () => {
    return (
        <div className="footer flex">
            <div className='hours flex'>
                <h1>Hour of Operation</h1>
                <div>Monday-Friday</div>
                <div>10AM-5PM PST</div>
            </div>
            <div className='contact flex'>
                <h1>Contact</h1>
                <div className='flex'>
                    <TfiEmail className='mail-icon'/>
                    <span>qijieguan7@gmail.com</span>
                </div>
                <div className='flex'>
                    <FiPhoneCall className="phone-icon"/>
                    <span>626-757-2356</span>
                </div>
                <div className='flex'>
                    <TfiLocationPin className='location-icon'/>
                    <span>Los Angeles County</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;