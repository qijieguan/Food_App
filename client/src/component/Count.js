import './styles/count.css';

import { useEffect } from "react";
import { useSelector } from "react-redux";

import uuid from "react-uuid";

const Count = () => {
    const count = useSelector(state => state.dips);

    useEffect(() => {
       
    }, [count]);

    return (
        <div className='count flex'>
            {count.length > 0 &&
                count.map(COUNT => 
                    <div key={uuid()} className="dip-quantity flex">
                        {COUNT.dip} X {COUNT.count}
                    </div>
                )
            }
        </div>
    )
}

export default Count;