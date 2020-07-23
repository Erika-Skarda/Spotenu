
    const initialState = {
        allBands: [],
        allUsers: [],
        bandId: "",
        userInfo: []
    }
    
    const user = (state = initialState, action) => {
    
        switch (action.type) {
            case "SET_ALL_BANDS":
                return {
                    ...state,
                    allBands: action.payload.bands
                }
    
            case "SET_ALL_USERS":
                return {
                    ...state,
                    allUsers: action.payload.users
                }
    
            case "SET_USER_INFO":
                return {
                    ...state,
                    userInfo: action.payload.info
                }
            case "GET_BAND_ID'":
                return {
                    ...state,
                    bandId: action.payload.id
                }
    
            default:
                return state;
        }
    }
    
    export default user;