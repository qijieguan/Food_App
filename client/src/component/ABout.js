import './styles/about.css';

const About = () => {

    const src = "https://cdn.pixabay.com/photo/2022/12/29/01/19/image-7684006_1280.jpg";

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