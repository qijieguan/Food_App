import placesReducer from "./placesReducer.js";
import flavorsReducer from "./flavorsReducer.js";
import dipsReducer from "./dipsReducer.js";
import orderReducer from "./orderReducer.js";
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    places: placesReducer,
    flavors: flavorsReducer,
    dips: dipsReducer,
    order: orderReducer,
}); 

export default allReducers;