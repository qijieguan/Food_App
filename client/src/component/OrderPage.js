import './styles/order-page.css';

import OrderList from './OrderList.js';
import OrderTotal from './OrderTotal.js';

const OrderPage = () => {


    return (
        <div className="order-page flex">
            <OrderList/>
            <OrderTotal/>
        </div>
    )
}

export default OrderPage;