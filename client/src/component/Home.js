import './styles/home.css';
import Slideshow from './Slideshow.js';

const Home = () => {

  const src = "https://res.cloudinary.com/dliw7yyw3/image/upload/v1684898124/Food/Crispy_Wings_thumb_no_text_1200x1200_fycbuj.jpg";

  return (
    <div className="home">
      <img src={src} className='home-bg' alt=""/>
      <div className='overlay'/>
      <Slideshow/>
    </div>
  )
}

export default Home;