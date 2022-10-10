import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducers)

export default store