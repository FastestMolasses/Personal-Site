import './App.css';
import React from 'react';
import 'shards-ui/dist/css/shards.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';

class App extends React.Component {
    render() {
        return <HomePage />;
    }
}

export default App;
