import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReduser = (state =  {isLogedIN: false}, action) => {
    console.log(state);
    switch(action.type) {
        case 'userLogIN':
            return {...state, isLogedIN: true};
        case 'userLogOUT':
            return {...state, isLogedIN: false};
        default:
            return {...state};
    }
}

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const initPersistReduser = persistReducer(persistConfig, rootReduser);

export const store = createStore(initPersistReduser);
export const persistor = persistStore(store);