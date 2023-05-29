const dipsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_DIPS':
            return [...action.payload];
        case 'CLEAR_DIPS':
            return [];
        default:
            return state;
    }
}

export default dipsReducer;