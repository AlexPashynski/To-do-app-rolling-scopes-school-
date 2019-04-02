import React, { Component } from 'react';
import store from './store';
import Task from './task'

class Tasks extends Component {

    render () {
        const categoryId = this.props.match.params.id;
        const tasks = store.getState().groups.find(category => category.id == categoryId).tasks;
        const renderedTasks = tasks.length ? tasks.map(task => <Task key={task.id} name={task.name}/>) : null;

        return (
            <div className="tasks-wrapper">
                {renderedTasks}
            </div>
        )
    }
}

export default Tasks
