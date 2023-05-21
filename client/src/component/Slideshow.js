import './styles/slideshow.css';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

import Slide from './Slide.js';
import { useEffect } from 'react';
import uuid from 'react-uuid';
import Data from './jsons/Slides.json';

const Slideshow = () => {

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
        let scrollElement = document.querySelector('.slideshow');
        scrollElement.scrollLeft =  (scrollElement.scrollWidth - scrollElement.clientWidth ) / 2;
      });
    });

    const startPlay = () => {
      autoplay = setInterval(scrollRight, 8000);
    }

    const init = () => {
      setTimeout(() => {
        slider = document.querySelector('.slideshow');
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
        setTimeout(() => {
          slider.scrollLeft = getClonesWidth() - slider.offsetWidth;
        }, 50);
      }    
    }

    const scrollLeft = () => {
      document.querySelector('.slideshow')?.scrollBy({top: 0, left: -document.body.clientWidth / 1.5, behavior: 'smooth'});
    }

    const scrollRight = () => {
      document.querySelector('.slideshow')?.scrollBy({top: 0, left: document.body.clientWidth / 2, behavior: 'smooth'});
    }

    return (
       
        <div className='slideshow flex'>
            {featured_items && 
              featured_items.map(item => <Slide item={item} key={uuid()} /> ) 
            }
        
            <div className='nav-arrows'>
                <div className='left-arrow flex' 
                onClick={() => { scrollLeft(); }}
                onMouseEnter={() => { clearInterval(autoplay); }} 
                onMouseLeave={() => { startPlay() }}
                >
                <MdArrowBackIosNew className='left-arrow-icon'/>
                </div>
                <div className='right-arrow flex' 
                  onClick={() => { clearInterval(autoplay); scrollRight(); }}
                  onMouseEnter={() => { clearInterval(autoplay); }} 
                  onMouseLeave={() => { startPlay() }}
                >
                <MdArrowForwardIos className='right-arrow-icon'/>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;