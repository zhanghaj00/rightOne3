import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducers from '../reducers';

let createStoreMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreMiddleware(reducers);

export default store;
