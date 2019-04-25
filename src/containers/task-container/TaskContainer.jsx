import React, { Component } from 'react';
import {connect} from 'react-redux';
import Task from '../../components/task/task';
import * as actions from '../../store/actions';
import Spinner from '../../components/spinner/spinner'
import './task-container-style.css';

class TaskContainer extends Component {

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        const isLoading = this.props.isLoading
        const tasks = isLoading ? <Spinner/> : this.props.tasks.map(task => <Task key={task.id} deleteTask={this.props.deleteTask} task={task}></Task>)
        return (
            <div className="task-container">
                {tasks}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTasks: () => dispatch(actions.fetchTasks),
        deleteTask: (id) => dispatch(actions.deleteTask(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)