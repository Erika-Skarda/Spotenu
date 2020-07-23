import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "../Reducers/user";
import role from "../Reducers/role";
import genre from "../Reducers/genre"

export const generateReducers = history =>

  combineReducers({
    router: connectRouter(history),
    user:user,
    role:role,
    genre:genre

    
  });