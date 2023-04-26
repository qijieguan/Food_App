import './styles/home.css';
import Slide from './Slide.js';
import { useEffect } from 'react';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import uuid from 'react-uuid';

const Home = () => {

    const featured_items = [
      {
        quote: 'Most Popular',
        image: 'https://res.cloudinary.com/dliw7yyw3/image/upload/v1682011805/Food/istockphoto-585602290-612x612_zetzgm.jpg',
        name: 'Chicken Sandwich Combo',
        content: '1 Chicken Sandwich of your choice regular or spicy flavor and 1 large cold drink',
        price: 8.99,
        calories: 900
      },
      {
        quote: 'Well Seasoned',
        image: 'https://images.pexels.com/photos/13999216/pexels-photo-13999216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: '8 PC Flavored Wings',
        content: 'Freshly made 8 piece wings with a choice of 4 flavors and 1 dip',
        price: 6.99,
        calories: 849
      },
      {
        quote: 'Get your protein',
        image: 'https://res.cloudinary.com/dliw7yyw3/image/upload/v1682012421/Food/fresh-tasty-burger_dxoodp.jpg',
        name: 'McNutt Burger',
        content: 'Single slice McNutt Burger with bacon served with small fries of your choice regular or garlic',
        price: 7.99,
        calories: 1089
      },
      {
        quote: 'Eat them up. Eat them up!',
        image: 'https://res.cloudinary.com/dliw7yyw3/image/upload/v1682030450/Food/fried-chicken-nuggets-on-white-background_u9s9dw.jpg',
        name: '8 PC Chicken Nuggets',
        content: '8 PC Chickens Nuggets served with 3 dips of your choice, ranch, honey mustards, and ketchup',
        price: 3.49,
        calories: 429
      }
    ];

    var clones = [];
    var slider;
    var slides;
    var offset = 0;
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
      autoplay = setInterval(scrollRight, 5000);
    }

    const init = () => {
      setTimeout(() => {
        slider = document.querySelector('.slider');
        slides = document.querySelectorAll('.slide');

        if (!clones.length) { cloneSlides(); }

        if (document.body.clientWidth > 785) { offset = 17.5; }

        slider.addEventListener('scroll', (e) => {
          setTimeout(() => { scrollUpdate(); }, 250)
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
      if (slider.scrollLeft <= 1) {
        slider.scrollLeft =  getClonesWidth();
      }
      else if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - offset) {
        slider.scrollLeft = getClonesWidth() - slider.offsetWidth;
      }    
    }

    const scrollLeft = () => {
      document.querySelector('.slider').scrollBy({top: 0, left: -document.body.clientWidth / 2, behavior: 'smooth'});
    }

    const scrollRight = () => {
      document.querySelector('.slider').scrollBy({top: 0, left: document.body.clientWidth / 2, behavior: 'smooth'});
    }

    return (
        <div className="home">
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
        </div>
    )
}

export default Home;