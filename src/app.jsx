import React, {Component} from 'react';
import store from './store';
import Groups from './Groups'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (
            <Groups/>
        )
    }
}

export default App