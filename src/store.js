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
        },
        {
            id: 7,
            name: 'Category 1.2.1',
            parentId: 5
        },
    ]
};

function reducer(state, action) {
    if (action.type === 'DELETE') {
        function removeCategory(array, id) {
            for (let i =0; i < array.length; i++) {
                if(array[i].id == id) {
                    array.splice(i, 1);
                    i --;
                } else if (array[i].parentId == id) {
                    removeCategory(array, array[i].id);
                    i = -1;
                }
            }
            return array;
        }
        const filteredCategories = removeCategory([...state.groups], action.id)
        return {groups: filteredCategories};
    } else {
        return state;
    }    
}

const store = createStore(reducer, initialState);

export default store;