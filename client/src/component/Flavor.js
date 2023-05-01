import { useState, useEffect } from 'react';
import { GiChiliPepper } from 'react-icons/gi';
import { BsFire } from 'react-icons/bs';

const Flavor = ({flavor}) => {

    const [rating, setRating] = useState(flavor.rating);
    const [color, setColor] = useState("red")

    useEffect(() => {
        if (rating === 1) {
            setColor('green');
        }
        else if (rating <= 3) {
            setColor('orange');
        }
        else {
            setColor('red');
        }
    }, []);

    return (
        <div className='flavor flex'>
            <div className='flavor-icon flex'><GiChiliPepper/></div>
            <div className='flavor-rating flex'>
                {
                    Array.apply(null, { length: rating }).map((e, index) => {
                        return <BsFire color={color}/>
                    })
                }
                {
                    Array.apply(null, { length: 5 - rating }).map((e, index) => {
                        return <BsFire color='grey'/>
                    })
                }
            </div>
            <h1 className='flavor-label'>{flavor.label}</h1>
            <span className='flavor-detail'>{flavor.description}</span>
        </div>
    )
}

export default Flavor;