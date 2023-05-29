const flavorsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FLAVORS':
            return [...action.payload];
        case 'CLEAR_FLAVORS':
            return [];
        default:
            return state;
    }
}

export default flavorsReducer;