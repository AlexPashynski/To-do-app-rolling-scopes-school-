import React, {Component} from 'react'
import Store from './store'
import Category from './Category'

class Groups extends Component {

    render() {

        const parents = Store.getState().groups.filter(group => group.parentId === null);

        return (
            <ul className='groups parent-groups'>
                {parents.map(parent => <Category key={parent.id} id={parent.id} />)}
            </ul>
        );
    }
}

export default Groups;