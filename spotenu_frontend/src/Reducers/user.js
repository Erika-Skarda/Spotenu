
    const initialState = {
        allBands: [],
        allUsers: [],
        band: undefined,
        userInfo: [],
        profile: {}
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
            case "SET_SELECTED_BAND":
                return {
                    ...state,
                    band:action.payload.band
                };
            case "SET_PROFILE":
                return {
                    ...state,
                    profile: action.payload.profile
                }
    
            default:
                return state;
        }
    }
    
    export default user;