import { createStore } from 'redux';

const initialState = {
    items: [],
    filters: [
        {
            id: 1,
            title: 'To do'
        },
        {
            id: 2,
            title: 'Completed'
        },
        {
            id: 3,
            title: 'All'
        }
    ],
    activeFilterId: 1
};

function reducer(state, action) {
    if (action.type === 'ADD_TODO') {
        const items = state.items.concat(action.item);
        return {...state, items: items};
    } else if (action.type === 'DELETE_TODO') {
        const items = state.items.filter( item => item.id !== action.id);
        return {...state, items: items};
    } else if (action.type === 'TOGGLE_COMPLETE_TODO') {
        let items = [...state.items]
        let index = items.findIndex( item => item.id === action.id);
        items[index].completed = !items[index].completed
        return {...state, items: items};
    } else if (action.type === 'APPLY_FILTER') {
        const tempState = {...state, activeFilterId: action.id};
        return tempState;
    } else {
        return state;
    }
}

const store = createStore(reducer, initialState);

export default store;