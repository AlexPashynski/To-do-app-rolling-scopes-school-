import React from 'react';
import './task-style.css'

const Task = ({task, deleteTask}) => {
    return (
        <div className="task-item">
            <div className="task-header">
                <div className='task-title'>{task.title}</div>
                <div className="task-title-buttons">
                    <i onClick={() => deleteTask(task.id)} className="fas fa-trash"></i>
                </div>
            </div>
            <div className="task-body">
                <div className="task-description">
                    {task.description}
                </div>
            </div>
        </div>
    )
}

export default Task