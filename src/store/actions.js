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