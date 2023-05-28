import './styles/order-total.css';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const OrderTotal = () => {

    const [subtotal, setSubTotal] = useState(0);
    const order = useSelector(state => state.order);

    useEffect(() => {
        let sum = 0;

        order.forEach(item => {
            sum += Number(item.price);
        });
        setSubTotal(sum);

    }, []);

    return (
        <div className='order-total'>
            <h1 className='carryout-address'>
                <span>Carryout from: </span>
                <span>{JSON.parse(sessionStorage.getItem('store'))}</span>
            </h1>
            <div className="order-cost flex">
                <h1 className='subtotal flex'>
                    <span>Sub Total</span>
                    <span>$ {subtotal.toFixed(2)}</span>
                </h1>
                <h1 className='sales-tax flex'>
                    <span>Sales Tax</span>
                    <span style={{color: 'white', fontSize: '1.5rem'}}>+</span>
                    <span>$ {(subtotal * .1).toFixed(2)}</span>
                </h1>
                <h1 className='total-cost flex'>
                    <span>Order Total</span>
                    <span>$ {(Number(subtotal) + Number((subtotal * .1).toFixed(2))).toFixed(2)}</span>
                </h1>
            </div>
        </div>
    )
}

export default OrderTotal