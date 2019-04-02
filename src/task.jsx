import React, { Component } from 'react';

class Task extends Component {
    
    render () {
        return (
            <div className='task-item'>
                {this.props.name}
            </div>
        )
    }
}

export default Task
