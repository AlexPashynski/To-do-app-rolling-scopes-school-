export const fetchTasks = (dispatch) => {
    dispatch({type: 'START_LOADING_TASKS'})
    new Promise((resolve, reject) => {
        fetch('http://localhost:3002/tasks')
        .then(response =>resolve(response.json()))        
    }).then(json => {
        dispatch({type: 'START_LOADING_TASKS'})
        dispatch({
        type: 'TASKS_FETCHED',
        tasks: json
    })})
}

export const deleteTask = (taskId) => (dispatch) => {
    new Promise((resolve, reject) => {
        fetch('http://localhost:3002/deleteTask',
        {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: taskId})
        })
        .then(response => {
            if (response.status === 200) {
                resolve()
            } else {
                reject()
            }
        })
    }).then(() => {
        dispatch({
            type: 'DELETE_TASK',
            taskId: taskId
        })
    })
}