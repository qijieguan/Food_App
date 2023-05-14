import placesReducer from "./placesReducer.js";
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    places: placesReducer,
}); 

export default allReducers;