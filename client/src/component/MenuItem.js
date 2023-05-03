import "./styles/menu-item.css"
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

const MenuItem = ({ item, category }) => {
    return (
        <div className="menu-item">
            <h1>{item.label}</h1>
            <div>{item.content}</div>
            <Link 
                to={"/Menu/" + item.label.replace(" ", "_").toLowerCase()}
                state={{ item: item, category: category }}
                key={uuid()}
            >
                <button className="menu-button">Order</button>
            </Link>
        </div>
    )
}

export default MenuItem;