import './styles/slide.css';
import { BsArrowRight } from 'react-icons/bs';

import { Link } from 'react-router-dom'
import uuid from 'react-uuid';

const Slide = ({ item }) => {

    return (
        <div className="slide flex">
            <div className='slide-wrapper'>
                <img src={item.image} className="slide-image" alt=""/>
                <div className="slide-quote">{item.quote}</div>
                <h1 className="slide-label">{item.label}</h1>
                <p className="slide-content">{item.content}</p>
                <Link 
                    to={ sessionStorage.getItem('store') ?  "/Menu/" + item.label.replace(" ", "_").toLowerCase() : '/Locations'}
                    state={{ item: item, category: item.category }}
                    key={uuid()}
                >
                    <button className='slide-button flex'>
                        <span>Quick Order</span>
                        <BsArrowRight className='arrow-right-icon'/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Slide;