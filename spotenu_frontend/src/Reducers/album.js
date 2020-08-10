  
const initialState = {
    allAlbums: [],
    albumId:""
}

const album = (state = initialState, action) => {

    switch (action.type) {
        case "SET_ALBUM":
            return {
                ...state,
                allAlbums: action.payload.albuns
            }
        case "SET_SELECTED_ALBUM":
            return {
                ...state,
                albumId: action.payload.id
            }

        default:
            return state;
    }
}

export default album;