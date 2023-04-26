import './styles/footer.css';

const Footer= () => {
    return (
        <div className="footer flex">
            <div className='hours flex'>
                <h1>Hour of Operation</h1>
                <div>Monday-Friday</div>
                <div>10AM-5PM PST</div>
            </div>
            <div className='contact flex'>
                <h1>Contact</h1>
                <div>qijieguan7@gmail.com</div>
                <div>626-757-2356</div>
                <div>Los Angeles County</div>
            </div>
        </div>
    )
}

export default Footer;