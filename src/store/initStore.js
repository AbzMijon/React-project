import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const initPersistReduser = persistReducer(persistConfig, rootReducer);

export const store = createStore(initPersistReduser);
export const persistor = persistStore(store);