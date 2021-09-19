import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import apiSpoofer from '../../middleware/apiSpoofer/apiSpoofer';
import rootReducer from '../../reducers';

import App from '../App/App';

export const getStore = () => createStore(rootReducer, applyMiddleware(apiSpoofer));

export const Root = () => <Provider store={getStore()}><App /></Provider>;

export default Root;
