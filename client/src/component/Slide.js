import './styles/slide.css';
import { BsArrowRight } from 'react-icons/bs';

const Slide = ({ item }) => {

    return (
        <div className="slide flex">
            <div className='slide-wrapper'>
                <img src={item.image} className="slide-image" alt=""/>
                <div className="slide-quote">{item.quote}</div>
                <h1 className="slide-label">{item.label}</h1>
                <p className="slide-content">{item.content}</p>
                <button className='slide-button flex'>
                    <span>Quick Order</span>
                    <BsArrowRight className='arrow-right-icon'/>
                </button>
            </div>
        </div>
    )
}

export default Slide;