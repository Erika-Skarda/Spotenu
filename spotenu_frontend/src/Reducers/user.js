// const user = (state = [], action) => { 

//     switch(action.type){ 
//         case "SET_USER_INFO": 
//         return {...state, userInfo: action.payload.info} 
//     default: 
//         return state 
// }} 
//     export default user;
    const initialState = {
        allBands: [],
        allUsers: [],
        userInfo: {}
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
    
            default:
                return state;
        }
    }
    
    export default user;