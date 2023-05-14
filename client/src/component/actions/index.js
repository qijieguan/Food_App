export const setPlaces = data => {
    return {
        type: 'SET_PLACES',
        payload: data
    }
}

export const clearPlaces = data => {
    return {
        type: 'CLEAR_PLACES',
        payload: data
    }
}
