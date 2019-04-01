import React, {Component} from 'react';
import Store from './store';

class modalDeleteWindow extends Component {

    render () {
        const categoryId = this.props.match.params.id;
        const category = Store.getState().groups.find( group => group.id == categoryId)

        return (
            <div onClick={(e) => {this.props.history.goBack()}} className='modal'>
                <div className='modal-content'>
                    <div className="message">{`Are you sure you want to delete "${category.name}" category?`}</div>
                    <button onClick={(e) => this.deleteCategory(e, categoryId)}>Yes</button>
                    <button>No</button>
                </div>
            </div>
        )
    }

    deleteCategory = (e, id) => {
        e.stopPropagation()
        Store.dispatch({
            type: 'DELETE',
            id: id
        })
        this.props.history.push('/')
    }
}

export default modalDeleteWindow;