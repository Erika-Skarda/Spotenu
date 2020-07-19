import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "../Reducers/user";

export const generateReducers = history =>

  combineReducers({
    router: connectRouter(history),
    user
    
  });