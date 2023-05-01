import './styles/slider.css';
import Slide from './Slide.js';
import { useEffect } from 'react';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import uuid from 'react-uuid';
import Data from './jsons/Slides.json';

const Slider = () => {

    const featured_items = Data.slides;

    var clones = [];
    var slider;
    var slides;
    var autoplay;
  
    useEffect(() => {
      if (!autoplay) { startPlay(); }
      
      init(); 
    }, []);

    window.addEventListener('load', () => {
      setTimeout(() => {
        let scrollElement = document.querySelector('.slider');
        scrollElement.scrollLeft =  (scrollElement.scrollWidth - scrollElement.clientWidth ) / 2;
      });
    });

    const startPlay = () => {
      autoplay = setInterval(scrollRight, 8000);
    }

    const init = () => {
      setTimeout(() => {
        slider = document.querySelector('.slider');
        slides = document.querySelectorAll('.slide');

        if (!clones.length) { cloneSlides(); }

        slider.addEventListener('scroll', (e) => {
          setTimeout(() => { scrollUpdate(); }, 250);
        });
      });
    }
  
    const cloneSlides = () => {
 
      slides.forEach(slide => {
        let clone = slide.cloneNode(true);
        clone?.classList.add('clone');
        slider.appendChild(clone);
        clones.push(clone);
      });   
    }

    const getClonesWidth = () => {
      let width = 0;
      clones.forEach(clone => { width += clone.offsetWidth; });

      return width;
    }

    const scrollUpdate = () => {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft =  getClonesWidth();
      }
      else if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
        slider.scrollLeft = getClonesWidth() - slider.offsetWidth;
      }    
    }

    const scrollLeft = () => {
      document.querySelector('.slider')?.scrollBy({top: 0, left: -document.body.clientWidth / 1.5, behavior: 'smooth'});
    }

    const scrollRight = () => {
      document.querySelector('.slider')?.scrollBy({top: 0, left: document.body.clientWidth / 2, behavior: 'smooth'});
    }

    return (
       
        <div className='slider flex'>
            {featured_items.length ? 
                featured_items.map(item => 
                    <Slide item={item} key={uuid()} /> 
                )
                :
                ""
            }
        
            <div className='nav-arrows'>
                <div className='left-arrow flex' 
                onClick={() => { scrollLeft(); }}
                onMouseEnter={() => { clearInterval(autoplay); }} 
                onMouseLeave={() => { startPlay() }}
                >
                <RxDoubleArrowLeft className='left-arrow-icon'/>
                </div>
                <div className='right-arrow flex' 
                  onClick={() => { clearInterval(autoplay); scrollRight(); }}
                  onMouseEnter={() => { clearInterval(autoplay); }} 
                  onMouseLeave={() => { startPlay() }}
                >
                <RxDoubleArrowRight className='right-arrow-icon'/>
                </div>
            </div>
        </div>
    )
}

export default Slider;