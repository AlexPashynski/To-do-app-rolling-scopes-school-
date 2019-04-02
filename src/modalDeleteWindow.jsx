import React, {Component} from 'react';
import Store from './store';

class modalDeleteWindow extends Component {

    render () {
        const categoryId = this.props.match.params.id;
        // eslint-disable-next-line
        const category = Store.getState().groups.find( group => group.id == categoryId)

        return (
            <div onClick={(e) => {this.props.history.goBack()}} className='modal'>
                <div onClick={(e) => e.stopPropagation()} className='modal-content'>
                    <div className="modal-header">Delete category</div>
                    <div className="modal-message">{`Are you sure you want to delete "${category.name}"?`}</div>
                    <div className="modal-buttons">
                        <button id="delete" className="button" onClick={(e) => this.deleteCategory(e, categoryId)}>Delete</button>
                        <button id="cancel" className="button" onClick={(e) => {this.props.history.goBack()}}>Cancel</button>
                    </div>                    
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