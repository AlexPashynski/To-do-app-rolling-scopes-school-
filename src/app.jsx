import React, {Component} from 'react';
import store from './store';
import Groups from './Groups';
import {Route} from 'react-router-dom'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <Route path='/category/:id' component={Groups}/>           
        )
    }
}

export default App