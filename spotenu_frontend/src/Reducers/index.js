import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "../Reducers/user";
import role from "../Reducers/role";

export const generateReducers = history =>

  combineReducers({
    router: connectRouter(history),
    user,
    role:role

    
  });