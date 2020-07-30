export const changePhotoAction = photo => {
    return {
      type: "CHANGE_PHOTO",
      payload: {
        photo:photo
      }
    };
  };