import './styles/about.css';

const About = () => {

    const src = "https://res.cloudinary.com/dliw7yyw3/image/upload/v1684988132/Food/image-7684006_1280_lvcqe2.jpg";
    
    return (
        <div className='about flex'>
            <div className='about-left'>
                <h1>Joy For Wings</h1>
                <p>
                    Our restaurants are managed by individuals who are passionate about wings.
                    We believe wings are a delicacy that requires proper preparations and
                    cooking attention. Our wings are flavorful, crispy, juicy, and tender when
                    you take the first bite. We strive to grow our business by bringing joy to
                    everyone trying our delicious wings.
                </p>
                <h1>Our Story</h1>
                <p>
                    Our CEO grew up with a love for delicious wings and fried chicken. 
                    His memorable wing experiences were in Asia, particularly Korean regions. 
                    After his food experience at a small Korean wing restaurant, 
                    he wants to bring more recognition to Korean style wings. 
                </p>
            </div>
            <img src={src} className='about-right' alt=""/>
        </div>
    )
}

export default About;