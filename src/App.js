import React from 'react';

import './App.css';
import 'shards-ui/dist/css/shards.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AboutMe from './pages/AboutMe';
import HomePage from './pages/HomePage';

export default class App extends React.Component {
    render() {
        return <HomePage />;
    }
}
