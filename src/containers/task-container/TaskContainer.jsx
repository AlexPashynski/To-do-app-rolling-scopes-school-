import React, { Component } from 'react';
import {connect} from 'react-redux';
import Task from '../../components/task/task';
import * as actions from '../../store/actions';
import './task-container-style.css';

class TaskContainer extends Component {

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {

        const isLoading = this.props.isLoading
        const tasks = isLoading ? <div>Loading...</div> : this.props.tasks.map(task => <Task key={task.id} task={task}></Task>)

        return (
            <div class="task-container">
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
        fetchTasks: () => dispatch(actions.fetchTasks)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)