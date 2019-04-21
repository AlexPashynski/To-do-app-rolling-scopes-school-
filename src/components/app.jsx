import React, { Component } from 'react';
import TaskContainer from '../containers/task-container/TaskContainer';

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <TaskContainer/>
            </React.Fragment>
        )
    }
}

export default App