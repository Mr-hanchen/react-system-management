import {applyMiddleware, createStore} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sessionStorage from "redux-persist/es/storage/session";
import rootReducers from '../reducers';

const persistConfig = {
    key: "chen",
    storage: sessionStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer, applyMiddleware(logger, thunk))
export const persistor = persistStore(store)
