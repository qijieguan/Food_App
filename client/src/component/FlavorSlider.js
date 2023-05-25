import './styles/flavor-slider.css';
import { BsFire } from 'react-icons/bs';
import { GiChiliPepper } from 'react-icons/gi';

import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from './actions/index.js';

const FlavorSlider = ({ flavor, choice, max }) => {

    const [input, setInput] = useState(0);
    const [id, setId] = useState(uuid());
    const [rating, setRating] = useState(flavor.rating);
    const [color, setColor] = useState("red");
 
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.quantity);

    useEffect(() => {
        if (rating === 1) { setColor('green'); }
        else if (rating <= 3) { setColor('orange'); }
        else { setColor('red'); }

        let sliderContainer = document.getElementById(id)?.parentElement;
        let sliderInput = document.getElementById(id)?.querySelector('.flavor-slider > .slider');

        let match = quantity.filter(element => element.flavor === flavor.label);

        if (!match.length && quantity) {
            if (quantity.length === choice) {
                sliderContainer?.classList.add('hide');
                sliderInput?.setAttribute("disabled", true);
            }
            else {
                sliderContainer?.classList.remove('hide');
                sliderInput?.removeAttribute('disabled');
            }
        }

        let sum = 0;
        quantity.forEach(element => {
            sum += Number(element.count);
        });

        if (!match.length && Number(sum) === Number(max)) {
            sliderContainer?.classList.add('hide');
            sliderInput?.setAttribute("disabled", true);
        }

    }, [flavor, quantity]);

    const handleOnChange = (e) => {

        let sum = 0;
        quantity.forEach(element => {
            sum += Number(element.count);
        });
        
        if (Number(e.target.value) >= Number(input) && Number(sum) === Number(max)) { return ; }
        
        setInput(e.target.value);
        sliderTransform(e.target.value);

        if (!quantity.length) {
            dispatch(setQuantity([...quantity, {flavor: flavor.label, count: e.target.value}]));
        }
        else {
            let QTY = quantity;
            let match = false;
            
            if (Number(e.target.value) !== 0) {
                QTY.forEach(element => {
                    if (element.flavor === flavor.label) {
                        element.count = e.target.value;
                        match = true;
                    }
                });
            }
            else {
                QTY = QTY.filter(element => element.flavor !== flavor.label);
            }

            if (!match && Number(e.target.value) !== 0) {
                QTY = [...quantity, {flavor: flavor.label, count: e.target.value}]     
            } 
            dispatch(setQuantity(QTY));
        }
    }

    const sliderTransform = (value) => {
        let slider = document.getElementById(id)?.querySelector('.slider');
        let sliderThumb = document.getElementById(id)?.querySelector('.slider-thumb');

        let thumbPosition = value / max;
        if (thumbPosition >= 0.75) { thumbPosition *= 1.1 }

        let space = slider.offsetWidth - sliderThumb.offsetWidth;
        sliderThumb.style.left = (thumbPosition * space) + 'px';
    }

    return (
        <div className='slider-container flex'>
            <h1 className='slider-label'>{flavor.label}</h1>
            <div className='slider-icon'><GiChiliPepper/></div>
            <div className='slider-rating'>
                {
                    Array.apply(null, { length: rating }).map((e, index) => {
                        return <BsFire color={color} key={uuid()}/>
                    })
                }
                {
                    Array.apply(null, { length: 5 - rating }).map((e, index) => {
                        return <BsFire color='grey' key={uuid()}/>
                    })
                }
            </div>
            <div className='flavor-slider flex' id={id}> 
                <input type="range" min="0" max={max} value={input} className="slider" 
                    onChange={e => {handleOnChange(e)}}
                />
                <div className='slider-thumb flex'><span>{input}</span></div>
            </div>
        </div>  
    )
}

export default FlavorSlider;