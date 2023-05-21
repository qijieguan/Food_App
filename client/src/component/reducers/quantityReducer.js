const quantityReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_QUANTITY':
            return action.payload;
        case 'CLEAR_QUANTITY':
            return [];
        default:
            return state;
    }
}

export default quantityReducer;