import {persistStore} from 'redux-persist';
import persistedReducer from './persist';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);