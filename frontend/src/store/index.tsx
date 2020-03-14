import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../ducks'


const appliedMidlleware = applyMiddleware(thunk);
const create = () => {
    

    return createStore(reducer, appliedMidlleware);
};

export default create;
