import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import rootReducer from '@src/store/reducers/rootReducer';

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
	stateReconciler: hardSet,
};

const middlewareList = [];
const middlewareEnhancer = applyMiddleware(...middlewareList);

const enhancersList = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__)
	enhancersList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composedEnhancers = compose(middlewareEnhancer, ...enhancersList);

const initPersistReduser = persistReducer(persistConfig, rootReducer);

export const store = createStore(initPersistReduser);
export const persistor = persistStore(store);
