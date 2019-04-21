import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    isLoading: false,
    tasks: []
}

const reducer = (state, action) => {
    if(action.type === 'TASKS_FETCHED') {
        return {
            tasks: action.tasks
        }
    } else if (action.type === 'START_LOADING_TASKS') {
        return {isLoading: true}
    } else if (action.type === 'STOP_LOADING_TASKS') {
        return {isLoading: false}
    }
    return state;
}

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;