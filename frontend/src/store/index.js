import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../ducks'

const isLocal = () => window.location.href.includes('localhost');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appliedMidlleware = applyMiddleware(thunk);
const create = () => {
    
    if (isLocal()) {
        createStore(reducer, composeEnhancers(appliedMidlleware));
    }
    return createStore(reducer, appliedMidlleware);
};

export default create;
