import './styles/quantity.css';

import { useEffect } from "react";
import { useSelector } from "react-redux";

import uuid from "react-uuid";

const Quantity = () => {
    const quantity = useSelector(state => state.flavors);

    useEffect(() => {
    
    }, [quantity]);

    return (
        <div className="quantity flex">
            {quantity.length > 0 &&
                quantity.map(QTY => 
                    <div key={uuid()} className="flavor-quantity flex">
                        {QTY.flavor} X {QTY.count}
                    </div>
                )
            }
        </div>
    )
}

export default Quantity;