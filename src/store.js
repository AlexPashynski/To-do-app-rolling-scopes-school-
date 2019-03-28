import { createStore } from 'redux';

const initialState = {
    groups: [
        {
            id: 1,
            name: 'Category 1',
            parentId: null
        },
        {
            id: 2,
            name: 'Category 2',
            parentId: null
        },
        {
            id: 3,
            name: 'Category 3',
            parentId: null
        },
        {
            id: 4,
            name: 'Category 1.1',
            parentId: 1
        },
        {
            id: 5,
            name: 'Category 1.2',
            parentId: 1
        },
        {
            id: 6,
            name: 'Category 3.1',
            parentId: 3
        }
    ]
};

function reducer(state, action) {
    return state;
}

const store = createStore(reducer, initialState);

export default store;