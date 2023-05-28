const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return [...action.payload];
        case 'CLEAR_ORDER':
            return [];
        default:
            return state;
    }
}

export default orderReducer;