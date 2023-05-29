import './styles/dip-slider.css';

import { useState, useEffect } from 'react';
import uuid from 'react-uuid';

import { useSelector, useDispatch } from 'react-redux';
import { setDips } from './actions/index.js';

const DipSlider = ({ dip, max, choice, label }) => {

    const [id, setId] = useState(uuid());
    const [input, setInput] = useState(0);

    const dispatch = useDispatch();
    const dips = useSelector(state => state.dips);

    useEffect(() => {
        let sliderContainer = document.getElementById(id)?.parentElement;
        let sliderInput = document.getElementById(id)?.querySelector('.dip-slider > .slider');

        let match = dips.filter(element => element.dip === dip.label);

        if (!match.length && dips) {
            if (dips.length === choice) {
                sliderContainer?.classList.add('hide');
                sliderInput?.setAttribute("disabled", true);
            }
            else {
                sliderContainer?.classList.remove('hide');
                sliderInput?.removeAttribute('disabled');
            }
        }

        let sum = 0;
        dips.forEach(element => {
            sum += Number(element.count);
        });
        
        if ((!match.length && Number(sum) === Number(max)) || (label.includes('Sauce') && !label.includes(dip.label))) {
            sliderContainer?.classList.add('hide');
            sliderInput?.setAttribute("disabled", true);
        }

    }, [dip, dips]);

    const handleOnChange = (e) => {
        let sum = 0;
        dips.forEach(element => {
            sum += Number(element.count);
        });
        
        if (Number(e.target.value) >= Number(input) && Number(sum) === Number(max)) { return ; }
        
        setInput(e.target.value);
        sliderTransform(e.target.value);

        if (!dips.length) {
            dispatch(setDips([...dips, {dip: dip.label, count: e.target.value}]));
        }
        else {
            let DIPS = dips;
            let match = false;
            
            if (Number(e.target.value) !== 0) {
                DIPS.forEach(element => {
                    if (element.dip === dip.label) {
                        element.count = e.target.value;
                        match = true;
                    }
                });
            }
            else {
                DIPS = DIPS.filter(element => element.dip !== dip.label);
            }

            if (!match && Number(e.target.value) !== 0) {
                DIPS = [...dips, {dip: dip.label, count: e.target.value}]     
            } 
            dispatch(setDips(DIPS));
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
            <h1>{dip.label}</h1>
            <div className='dip-slider flex' id={id}> 
                <input type="range" min="0" max={max} value={input} className="slider" onChange={e => {handleOnChange(e)}}/>
                <div className='slider-thumb flex'><span>{input}</span></div>
            </div>      
        </div>
    )
}

export default DipSlider;