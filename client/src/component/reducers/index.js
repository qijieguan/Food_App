import placesReducer from "./placesReducer.js";
import quantityReducer from "./quantityReducer.js";
import countReducer from "./countReducer.js";
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    places: placesReducer,
    quantity: quantityReducer,
    count: countReducer,
}); 

export default allReducers;