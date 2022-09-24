import { combineReducers } from 'redux';
import { serverErrorReducer } from '@src/store/reducers/serverErrorReducer';
import { userReducer } from '@src/store/reducers/userReducer';

const rootReducer = combineReducers({
	user: userReducer,
	server: serverErrorReducer,
});

export default rootReducer;