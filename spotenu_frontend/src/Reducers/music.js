const initialState = {
    allMusics: [],
    myMusics: []
}

const music = (state = initialState, action) => {

    switch (action.type) {
        case "SET_ALL_MUSICS":
            return {
                ...state,
                allMusics: action.payload.musics
            }
        case "SET_MY_MUSICS":
            return {
                ...state,
                myMusics: action.payload.musics
            }

        default:
            return state;
    }
}

export default music