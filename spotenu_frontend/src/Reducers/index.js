import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "../Reducers/user";
import role from "../Reducers/role";
import genre from "../Reducers/genre";
import photo from "../Reducers/photo";
import album from '../Reducers/album';
import music from "../Reducers/music";

export const generateReducers = history =>

  combineReducers({
    
    router: connectRouter(history),
    user:user,
    role:role,
    genre:genre,
    photo:photo,
    album:album,
    music:music

    
  });