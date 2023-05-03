import './styles/item-page.css';
import { Link, useLocation } from "react-router-dom";

const ItemPage = () => {

    const location  = useLocation();
    const item = location.state.item;
    const category = location.state.category;

    return (
        <div className="item-page flex">
            <header className='item-header flex'>
                <Link to="/Menu" className='menu-link'>Menu</Link>
                <div>{category}</div>
                <div>{item.label}</div>
            </header>
            <img className="item-left" src={item.image} alt=""/>
            <div className="item-right">
                <h1 className='item-right-label'>{item.label}</h1>
                <div className='item-right-content'>{item.content}</div>
                <button className="item-right-button">Start Order</button>
            </div>
            <div className="item-footer flex">
                <h1> 2,000 calories a day is used for general nutrition advice, but calorie needs vary.</h1>
                <h1> Additional nutrition information available upon request. </h1>                
            </div>
        </div>
    )
}

export default ItemPage;