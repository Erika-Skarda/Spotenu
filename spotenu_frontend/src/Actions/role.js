export const changeRoleAction = role => {
    return {
      type: "CHANGE_ROLE",
      payload: {
        role:role
      }
    };
  };