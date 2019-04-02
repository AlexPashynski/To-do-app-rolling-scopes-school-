import { createStore } from 'redux';

const initialState = {
    groups: [
        {
            id: 1,
            name: 'Sports activities',
            parentId: null,
            tasks: [
                {
                    id: 1,
                    name: 'Run 3 km'
                }
            ]
        },
        {
            id: 2,
            name: 'Home',
            parentId: null,
            tasks: []
        },
        {
            id: 3,
            name: 'Office tasks',
            parentId: null,
            tasks: []
        },
        {
            id: 4,
            name: 'Swimming',
            parentId: 1,
            tasks: [
                {
                    id: 2,
                    name: 'Swim 5 km'
                }
            ]
        },
        {
            id: 5,
            name: 'Bike',
            parentId: 1,
            tasks: []
        },
        {
            id: 6,
            name: 'Coffee drinking',
            parentId: 3,
            tasks: []
        },
        {
            id: 7,
            name: 'Riding skills',
            parentId: 5,
            tasks: []
        },
    ]
};

function reducer(state, action) {
    if (action.type === 'DELETE') {
        function removeCategory(array, id) {
            for (let i =0; i < array.length; i++) {
                // eslint-disable-next-line
                if(array[i].id == id) {
                    array.splice(i, 1);
                    i --;
                    // eslint-disable-next-line
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