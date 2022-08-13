import { combineReducers } from "redux"
import { serverError } from "./serverError";
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    server: serverError,
});

export default rootReducer;