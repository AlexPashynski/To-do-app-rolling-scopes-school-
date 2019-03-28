import React, {Component} from 'react';
import store from './store'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        return (

        )
    }
}

export default App