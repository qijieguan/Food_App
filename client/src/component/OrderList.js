import './styles/order-list.css';
import { useSelector } from 'react-redux';

import uuid from 'react-uuid';

const OrderList = () => {

    const order = useSelector(state => state.order);

    return (
        <div className='order-list'>
            <h1 className='order-label'>Order View</h1>
            {order.length > 0 ?
                order.map(item => 
                    <div className='order-item' key={uuid()}>
                        <h1 className='item-label flex'>
                            <span>{item.label}</span> 
                            <span>${item.price.toFixed(2)}</span>
                        </h1>
                        <div className='order-quantity'>
                            {item.flavors.length > 0 &&
                                item.flavors.map(QTY => 
                                    <div key={uuid()}> - {QTY.flavor} X {QTY.count} PC</div>    
                                )
                            }
                        </div>
                        <div className='order-dips'>
                            {item.dips.length > 0 &&
                                item.dips.map(dip => 
                                    <div key={uuid()}> 
                                        - {dip.dip} X {dip.count} DIP{dip.count > 1 ? 'S' : ''}
                                    </div>    
                                )
                            }
                        </div>
                    </div>
                )
                :
                <h1 className='order-empty'>Try Adding Wings on Your Order</h1>
            }
        </div>
    )
}

export default OrderList;