const initialState = {
    selectedRole: ""
  };
  
  const role = (state = initialState, action) => {
   
    switch (action.type) {
      case "CHANGE_ROLE":
        return { ...state, selectedRole: action.payload.role };
      default:
        return state;
    }
  };
  
  export default role;