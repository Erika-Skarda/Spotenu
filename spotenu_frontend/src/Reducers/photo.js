const initialState = {
    userPhoto: ""
  };
  
  const photo = (state = initialState, action) => {
   
    switch (action.type) {
      case "CHANGE_PHOTO":
        return { ...state, userPhoto: action.payload.photo };
      default:
        return state;
    }
  };
  
  export default photo;