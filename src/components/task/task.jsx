import React from 'react';
import './task-style.css'

const Task = (props) => {
    return (
        <div class="task-item">
            <div class="task-header">
                <span class='task-title'>{props.task.title}</span>
            </div>
            <div class="task-body">
                <div class="task-description">
                    {props.task.description}
                </div>
            </div>
        </div>
    )
}

export default Task