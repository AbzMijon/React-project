import { combineReducers } from "redux"
import { serverErrorReducer } from "./serverErrorReducer";
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    server: serverErrorReducer,
});

export default rootReducer;