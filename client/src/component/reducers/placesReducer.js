const placesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLACES':
            return [...state, action.payload];
        case 'CLEAR_PLACES':
            return [];
        default:
            return state;
    }
}

export default placesReducer;