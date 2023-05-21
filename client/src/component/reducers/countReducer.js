const countReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return action.payload;
        case 'CLEAR_COUNT':
            return [];
        default:
            return state;
    }
}

export default countReducer;