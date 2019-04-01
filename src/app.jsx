import React, { Component } from 'react';
import store from './store';
import Groups from './Groups';
import modalDeleteWindow from './modalDeleteWindow'
import { Route } from 'react-router-dom'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <React.Fragment>
                <div className="category-section">
                    <Route exact path='/' component={Groups} />
                    <Route path='/category/:id' component={Groups} />
                    <Route path='/category/:id/delete' component={modalDeleteWindow} />
                </div>
                <div className="task-section">

                </div>

            </React.Fragment>
        )
    }
}

export default App