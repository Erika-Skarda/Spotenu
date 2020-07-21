  
const initialState = {
    allGenres: [],
}

const genre = (state = initialState, action) => {

    switch (action.type) {
        case "SET_GENRES":
            return {
                ...state,
                allGenres: action.payload.genres
            }

        default:
            return state;
    }
}

export default genre