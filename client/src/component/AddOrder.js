import './styles/add-order.css';

import { useSelector, useDispatch } from "react-redux";
import { setOrder, clearFlavors, clearDips } from './actions';

import { useNavigate } from "react-router-dom";

const AddOrder = ({item}) => {

    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const flavors = useSelector(state => state.flavors);
    const dips = useSelector(state => state.dips);
    const order = useSelector(state => state.order);

    const handleAddOrder = () => {
        let orderObj;

        let sum = 0;
        flavors.forEach(element => {
            sum += Number(element.count);
        });
        if (Number(item.pieces) === Number(sum) || !Object.hasOwn(item, 'flavor')) {
            orderObj = {
                label: item.label,
                flavors: flavors,
                price: item.price,
                dips: dips
            }

            if (!order.length) {
                dispatch(setOrder([orderObj]));
            }
            else {
                dispatch(setOrder([...order, orderObj]));
            }
            dispatch(clearFlavors());
            dispatch(clearDips());

            navigate('/Order_Page');
        }
        else {
            document.querySelector('.flavor-header')?.classList.add('dropdown');
            document.querySelector('.flavor-content').scrollIntoView({block: 'start', inline: 'nearest'});
        }
    }
    return (
        <button onClick={() => {handleAddOrder()}} className="add-order">
            Add to Order
        </button>
    )
}

export default AddOrder;